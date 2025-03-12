import React from 'react'
import FloatingLabelInput from "../components/FloatingLabelInput";
import CustomButton from '../components/CustomButton';
import { Link } from 'react-router-dom';

export default function LoginPage(){

  return(
    <div
    className="h-screen w-screen bg-[linear-gradient(-45deg,#000000_0%,#200000_45%,#200000_55%,#000000_100%)]
    flex items-center justify-center font-mono">
    <div className="flex shadow-2xl">
      <div className="flex flex-col items-center justify-center text-center p-20 gap-8 bg-black/30 rounded-2xl">
          <h1 className="text-5xl font-bold text-gray-200">Welcome to Nathflix!</h1>
          <FloatingLabelInput label="Email" type="email" id="email" name="email" />
          <FloatingLabelInput label="Password" type="password" id="password" name="password" />
          <CustomButton text='Login'/>
          <p className="font-semibold text-gray-300">
            Don't have an account yet?{" "}
            <Link
              to="/register"
              className="inline-block text-red-800 hover:underline active:scale-95 transition-transform active:text-red-500"
            >
              Register now!
            </Link>
          </p>
            <a href='#' className='inline-block 
            text-red-800 hover:underline active:scale-95 transition-transform
            active:text-red-500 font-semibold'>Forgot password?</a>
      </div>
    </div>
  </div>
  )
}