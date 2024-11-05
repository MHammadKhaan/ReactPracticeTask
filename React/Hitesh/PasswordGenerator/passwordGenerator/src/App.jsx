import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  //Password generator method
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+{}|?";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  // copy password method
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <div className="w-full max-w-md mx-auto px-4 py-3 my-8 rounded-lg text-orange-500 bg-slate-800">
      <div className="text-white text-center"> password generator</div>
      <div className="flex shadow  rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          readOnly
          className="outline-none w-full py-1 px-3"
          ref={passwordRef}
        />
        <button
          onClick={copyPassword}
          className="outline-none bg-blue-700 px-3"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1"></div>
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label htmlFor="">Length: {length}</label>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label>Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="numInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
