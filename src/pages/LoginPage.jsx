import React from 'react'
import FloatingLabelInput from "../components/FloatingLabelInput";


export default function LoginPage(){

  return(
    <div
    className="h-screen w-screen bg-[linear-gradient(-45deg,#000000_0%,#200000_45%,#200000_55%,#000000_100%)]
    flex items-center justify-center font-mono">
    <div className="flex shadow-2xl">
      <div className="flex flex-col items-center justify-center text-center p-20 gap-8 bg-black/30 rounded-2xl">
          <h1 className="text-5xl font-bold text-gray-200">Welcome back</h1>
          <FloatingLabelInput label="Email" type="email" id="email" name="email" />
          <FloatingLabelInput label="Password" type="password" id="password" name="password" />
          <button className='px-10 py-2 text-2xl rounded-md text-gray-200 bg-red-900'>Login</button>
      </div>
    </div>
  </div>
  )
}