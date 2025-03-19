import React from 'react'
import Navbar from '../components/Navbar'


export default function HomePage(){
    return(
        <>
            <div className="h-screen w-screen  bg-[linear-gradient(-45deg,#000000_0%,#200000_45%,#200000_55%,#000000_100%)] ">
                <Navbar/>
                <div className="pt-38 items-center justify-center font-mono flex">
                    <div className="text-gray-300 text-9xl flex flex-col 
                    items-center justify-center text-center p-20 gap-8 
                    border rounded-2xl border-red-950/30 bg-black/30">
                    WIP
                    </div>
                </div>
            </div>
        </>
    )
}