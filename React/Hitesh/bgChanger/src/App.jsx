import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const array = [
    "Red",
    "Green",
    "Blue",
    "Olive",
    "Gray",
    "Yellow",
    "Pink",
    "Purple",
    "Lavender",
    "White",
    "Black",
  ];
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 bg-white rounded-full px-3 py-2">
          {array.map((item, index) => (
            <button
              key={index}
              className="outline-none px-4 py-1 rounded-full text-white"
              onClick={() => setColor(item)}
              style={{ backgroundColor: item }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
