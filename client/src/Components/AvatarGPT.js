import React, { useState } from "react";
import Header from "./Header";
import "./AvatarGPT.css";
import { NavLink } from "react-router-dom";
import { getCategory } from "../Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import TemplateAside from "./TemplateAside";


const AvatarGPT = () => {

    const dispatch = useDispatch();

    // document.addEventListener("DOMContentLoaded", ()=>{
    //     const getImgElement = document.getElementById("elonIm");

    //     getImgElement.addEventListener("mouseenter", ()=>{
    //         window.alert("Ente");
    //     });

    // })


    return <>

        <div className="flex flex-row w-screen h-screen">

            <TemplateAside />

            <section className={`mainAvatarGPTChatBox h-full flex-1 flex flex-col gap-y-10 items-center p-2 relative bg-gradient-to-b from-cyan-100 to-cyan-50`}>

                <Header getBorderColor="border-gray-700" getTextColor="text-black" />


                <h1 className="font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-600 to-blue-700 px-40 py-2 rounded-md shadow-2xl bg-black/20" id="tagLine">AvatarGPT</h1>

                <div className="flex flex-col gap-y-8 w-full h-full items-center rounded-r-lg" id="userPrompt">

                    <div className="flex flex-row  w-full h-full rounded-r-lg container mx-auto max-w-5xl bg-cyan-200 rounded-xl">

                        <div className="flex flex-col gap-y-6 w-1/2 h-full rounded-l-lg animate-text  justify-center pl-12">
                            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-700 animate-text">Unfiltered Conversations!!</h1>

                            <h1 className="text-3xl font-bold text-black/80">Your Chance to Grill Your Favourite Folks. </h1>

                            <h1 className="text-xl leading-relaxed text-black/80">Experience the thrill of direct interaction as you chat with your stars and ask them anything you want - <span className="font-bold">With No Limits or Boundaries!</span><br></br>
                                Real Talk: No Limits, No Filters, Just You and Your Fave Celebs</h1>

                            <a href="/avatarGPT/categoryList"><button type="button" className="bg-red-500 px-8 w-fit py-2 rounded-md text-white font-bold text-xl">Get Started <span className="ml-2 text-xl">↗️</span></button></a>

                        </div>

                        <div className="flex flex-1 items-center h-full rounded-r-lg justify-end">
                            {/* <div className="flex items-center bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 rounded-3xl"> */}
                            <img src="/Images/beingCool.png" alt="beingCool" className=""></img>
                            {/* </div> */}
                        </div>
                    </div>

                </div>










            </section>
        </div>

    </>
};

export default AvatarGPT;