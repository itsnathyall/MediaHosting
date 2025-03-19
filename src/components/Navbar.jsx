import React from 'react'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import myLogo from '../logo/nathflix.svg'

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
    <nav className="bg-black text-white border-b-1 border-gray-300">
      <div className=" mx-auto px-2 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <img className="w-15 h-auto" src={myLogo} alt="Description of image" />
          </div>
          <h1 className="text-gray-300 text-4xl md:text-6xl  
            font-bold tracking-tight text-foreground justify- ">
            Nathflix
            </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="#" className="hover:text-gray-200">About</a>
            <a href="#" className="hover:text-gray-200">Services</a>
            <a href="#" className="hover:text-gray-200">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <a href="#" className="block py-2 px-4 text-white hover:bg-blue-800">Home</a>
          <a href="#" className="block py-2 px-4 text-white hover:bg-blue-800">About</a>
          <a href="#" className="block py-2 px-4 text-white hover:bg-blue-800">Services</a>
          <a href="#" className="block py-2 px-4 text-white hover:bg-blue-800">Contact</a>
        </div>
      )}
    </nav>
        </>
    )
}