import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const AddValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const RemoveValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>Counter App</h1>
      <h3>count :{count}</h3>
      <button onClick={AddValue}>Add</button>
      <button onClick={RemoveValue}>Subtract</button>
    </>
  );
}

export default App;
