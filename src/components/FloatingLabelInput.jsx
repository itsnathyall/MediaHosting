import React, { useState } from "react";

export default function FloatingLabelInput({ label, type = "text", id, name }) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value !== "")}
        className="peer w-full border border-gray-300 rounded-md p-3 pt-5 text-gray-200 
                   focus:border-red focus:outline-none bg-transparent"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-200 text-gray-400
          ${isFocused || value ? "top-1 text-sm" : "top-4 text-gray-300"}`}
      >
        {label}
      </label>
    </div>
  );
}
