import React from "react"
import '../index.css'
import myLogo from '../logo/nathflix.svg'


export default function WelcomePage(){
    return(
        <>
            <div className="h-screen w-screen flex flex-col items-center justify-start bg-[linear-gradient(-45deg,#000000_0%,#200000_45%,#200000_55%,#000000_100%)] font-mono">
                <img className="w-25 h-auto" src={myLogo} alt="Description of image" />
                <h1 className="text-gray-300 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Nathflix
                </h1>
                <p className="text-xl text-gray-300 md:text-2xl text-center text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200 relative">
                Your own media garden for organizing and discovering all of your favorite content
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 pt-20 border-b-4 border-red-900"></span>
                </p>
                <div className="text-gray-300 max-w-2xl flex flex-col items-center justify-center text-center p-20 gap-8 bg-black/30 rounded-2xl">
                Sup sup 
                </div>
            </div>
        </>

    )
}

