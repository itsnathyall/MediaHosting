import { useState } from "react";
import "./index.css";
import FloatingLabelInput from "./FloatingLabelInput.jsx";

function App() {
  return (
    <div
      className="h-screen w-screen bg-[linear-gradient(-45deg,#000000_0%,#200000_45%,#200000_55%,#000000_100%)]
      flex items-center justify-center font-mono">
      <div className="flex shadow-2xl">
        <div className="flex flex-col items-center justify-center text-center p-20 gap-8 bg-black/30 rounded-2xl">
            <h1 className="text-5xl font-bold text-gray-400">Welcome back</h1>
            <FloatingLabelInput label="Email" type="email" id="email" name="email" />
            <FloatingLabelInput label="Password" type="password" id="password" name="password" />
            <div className="flex flex-col gap-4 p-5">
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
