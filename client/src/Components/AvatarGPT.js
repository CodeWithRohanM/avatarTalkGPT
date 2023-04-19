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

                    <NavLink to="/avatarGPT/category"><div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner" onClick={()=>{
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







            <section className={`mainAvatarGPTChatBox h-full flex-1 flex flex-col gap-y-10 items-center p-2 relative`}>

                <Header getBorderColor="border-gray-700" getTextColor="text-black" />

                <h1 className="text-blue-900 font-bold text-4xl" id="tagLine">ChatGPT</h1>

                {/* <div className="flex flex-col gap-y-8 w-full" id="userPrompt">

                    <div className="flex flex-row gap-x-6 bg-gray-600 w-full container mx-auto max-w-screen-lg items-center p-4 text-white rounded-t-md border-b border-white/10">
                        <img src="/Images/lightbulb.png" className="w-8 h-8" alt="user"></img>

                        <h1>Hi, I am Elon. Lets have some chat. Ask me anything you want.</h1>

                    </div>

                    <div className="flex flex-row gap-x-6 bg-gray-600 w-full container mx-auto max-w-screen-lg items-center p-4 text-white rounded-b-md overflow-scroll h-fit">
                        <img src="/Images/log.png" className="w-8 h-8" alt="user"></img>

                        <h1 className="leading-7">{showOutput}</h1>

                    </div>
                </div> */}


                {/* <Business/> */}



                {/* <div className="flex flex-col gap-y-8 w-full hidden" id="userPrompt">

                    <div className="flex flex-row gap-x-6 bg-gray-600 w-full container mx-auto max-w-screen-lg items-center p-4 text-white rounded-t-md border-b border-white/10">
                        <img src="/Images/lightbulb.png" className="w-8 h-8" alt="user"></img>

                        {/* <h1>{requestedPrompt}</h1> */}

                {/* </div>

                    <div className="flex flex-row gap-x-6 bg-gray-600 w-full container mx-auto max-w-screen-lg items-center p-4 text-white rounded-b-md overflow-scroll h-fit">
                        <img src="/Images/log.png" className="w-8 h-8" alt="user"></img>

                        {/* <h1 className="leading-7">{showLoader ? loading : showOutput}</h1> */}
                {/* 
                    </div>
                </div>   */}





                <form className="inputBox flex container max-w-4xl px-4 py-1 gap-x-3 absolute bottom-20 shadow-xl focus:outline-none items-center rounded-md">

                    <input
                        type="text"
                        className="w-full text-white font-normal bg-transparent appearance-none focus:outline-none border-none py-2"
                        placeholder="Send a Message.."
                        value=""
                        onChange={() => { }}></input>

                    <span className="hover:cursor-pointer text-xl hover:bg-black/40 px-3 rounded-md">↗️</span>

                </form>

                <div className="flex flex-col items-center justify-center w-full absolute bottom-4 px-2">
                    <h1 className="text-md">Free Research Preview: ChatGPT is optimised for dialogue. Our goal is to make AI systems more natural to interact with, and your feeback will help us improve</h1>
                    <h1> our systems and make them safer.</h1>
                </div>




            </section>
        </div>

    </>
};

export default AvatarGPT;