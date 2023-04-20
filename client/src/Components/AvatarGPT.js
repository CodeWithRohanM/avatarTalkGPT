import React, { useState } from "react";
import Header from "./Header";
import "./AvatarGPT.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../Actions/userActions";
import Business from "./PersonCategoryList";

const AvatarGPT = () => {

    const dispatch = useDispatch();

    // document.addEventListener("DOMContentLoaded", ()=>{
    //     const getImgElement = document.getElementById("elonIm");

    //     getImgElement.addEventListener("mouseenter", ()=>{
    //         window.alert("Ente");
    //     });

    // })

    // const getElonOnBoard = async () => {
    //     try {
    //         const getData = await fetch("/elonData", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 getElonData: "Pretend to be Elon Musk and answer my questions. I will ask you some questions and you have to answer as if you are Elon Musk. Dont take any other role. Do you understand?",
    //             }),
    //         });

    //         const getResponse = await getData.json();

    //         disptach(getStaticChatResponse(getResponse));

    //         console.log(getResponse);


    //     } catch (err) {
    //         console.warn(err);
    //     }


    // };











    return <>

        <div className="flex flex-row w-screen h-screen">

            <aside className="avatarGPTSideMenu h-full border-r border-white/5 p-2 flex flex-col gap-y-6">
                <div className="flex flex-row gap-x-6 border border-white/20 px-4 py-3 w-full hover:bg-white/5 hover:cursor-pointer transition ease-in-out duration-300 rounded-md shadow-inner items-center"
                >
                    <span className="text-xl">✋</span>
                    Choose Category
                </div>

                <div className="flex flex-col gap-y-2 w-full">

                    <NavLink to="/avatarGPT/category"><div className="flex flex-row gap-x-6 w-full px-4 py-3 border border-white/10 hover:bg-white/5 hover:cursor-pointer transition ease-in-out duration-300 rounded-md shadow-inner items-center" onClick={() => {
                        dispatch(getCategory("Business"));
                    }}>
                        <img src="/Images/circular.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>Business</h1>
                    </div></NavLink>

                    <NavLink to="/avatarGPT/category"><div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner" onClick={() => {
                        dispatch(getCategory("Celebraties"));
                    }}>
                        <img src="/Images/lightMode.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>Celebraties</h1>
                    </div></NavLink>

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner">
                        <img src="/Images/discord.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>Sports</h1>
                    </div>

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 shadow-inner rounded-md hover:cursor-pointer hover:bg-white/5 transition ease-in-out duration-300">
                        <img src="/Images/share.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>Influencers</h1>
                    </div>

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 hover:cursor-pointer hover:bg-white/5 transition ease-in-out duration-300 shadow-inner runded-md">
                        <img src="/Images/logout.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>Authors</h1>
                    </div>

                </div>

            </aside>







            <section className={`mainAvatarGPTChatBox h-full flex-1 flex flex-col gap-y-10 items-center p-2 relative bg-gradient-to-b from-cyan-100 to-cyan-50`}>

                <Header getBorderColor="border-gray-700" getTextColor="text-black" />


                <h1 className="font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-600 to-blue-700 px-40 py-2 rounded-md shadow-2xl bg-black/20" id="tagLine">AvatarGPT</h1>

                <div className="flex flex-col gap-y-8 w-full h-full items-center rounded-r-lg" id="userPrompt">

                    <div className="flex flex-row gap-x-4 w-full h-full rounded-r-lg container mx-auto max-w-5xl">

                        <div className="flex flex-col gap-y-6 w-1/2 h-full  rounded-l-lg animate-text  justify-center">
                            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-700 animate-text">Unfiltered Conversations!!</h1>

                            <h1 className="text-3xl font-bold text-black/80">Your Chance to Grill Your Favourite Celebrities. </h1>

                            <h1 className="text-xl leading-relaxed text-black/80">Experience the thrill of direct interaction as you chat with the stars and ask them anything you want - with no limits or boundaries!<br></br>
                                Real Talk: No Limits, No Filters, Just You and Your Fave Celebs</h1>

                                <button type="button" className="bg-red-500 px-8 w-fit py-2 rounded-md text-white font-bold text-xl">Get Started</button>

                        </div>
                        <div className="flex items-center flex-1 h-full rounded-r-lg">
                            <img src="/Images/beingCool.png" alt="beingCool" className="w-full"></img>
                        </div>
                    </div>

                </div>










            </section>
        </div>

    </>
};

export default AvatarGPT;