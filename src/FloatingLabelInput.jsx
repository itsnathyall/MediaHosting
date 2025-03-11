import React, { useState } from "react";

export default function FloatingLabelInput  ({ label, type = "text", id, name }){
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="peer w-full border border-gray-300 rounded-md p-3 pt-5 text-gray-900"
        placeholder={label}/>
      <label
        htmlFor={id}
        className={`absolute left-3 top-4 text-gray-400 transition-all duration-200 
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 
          peer-focus:top-1 peer-focus:text-sm`}>
        {label}
      </label>
    </div>
  );
};

  
 