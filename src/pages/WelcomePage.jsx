import React from "react"
import '../index.css'
import myLogo from '../logo/nathflix.svg'
import CustomButton from "../components/CustomButton"
import { useNavigate } from 'react-router-dom'

export default function WelcomePage(){
    const navigate = useNavigate();
    return(
        <>
            <div className="h-screen w-screen flex flex-col items-center justify-start bg-[linear-gradient(-45deg,#000000_0%,#200000_45%,#200000_55%,#000000_100%)] font-mono">
                <div className="justify-start items-center flex-col flex">
                    <img className="w-25 h-auto" src={myLogo} alt="Description of image" />
                    <h1 className="text-gray-300 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                    Nathflix
                    </h1>
                    <p className="pt-7 text-xl pb-6 text-gray-300 md:text-2xl text-center text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200 relative">
                    Your own media garden for cultivating and harvesting all of your favorite content.                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 pt-20 pb-20 border-b-4 border-red-900"></span>
                    </p>
                </div>
                <div className="pt-10">
                    <div className="text-gray-300 text-xl flex flex-col items-center justify-center text-center p-20 gap-8 border border-red-950 bg-black/30 rounded-2xl">
                        Movies, TV shows, comics, manga, books and music — all in one place, beautifully organized.
                        <CustomButton text='Login' onClick={() => navigate('/login')}/>
                        <CustomButton text='Create an account' onClick={() => navigate('/register')}/>
                    </div>
                    <div className="grid grid-cols-3 place-items-center">
                        <div className="text-red-900 text-3xl font-extrabold pt-19">
                            Watch
                        </div>
                        <div className="text-red-900 text-3xl font-extrabold pt-19">
                            Listen
                        </div>
                        <div className="text-red-900 text-3xl font-extrabold pt-19">
                            Read
                        </div>
                        <div className="flex text-gray-300 flex-cols">
                            Track your favorites,
                        </div>
                        <div className="flex text-gray-300 flex-cols">
                            Stay up to date with all
                        </div>
                        <div className="flex text-gray-300 flex-cols">
                            Read your favorite books, 
                        </div>
                    </div>
                    <div className="grid grid-cols-3 place-items-center">
                        <div className="flex text-gray-300 flex-cols">
                            never miss an episode
                        </div>
                        <div className="flex place-items-center text-gray-300">
                            your favorite artists
                        </div>
                        <div className="flex text-gray-300 flex-cols">
                            comics or mangas
                        </div>
                    </div>
                </div>
                <CustomButton text='Homepage' onClick={() => navigate('/home')}/>

            </div>
        </>
    )
}



