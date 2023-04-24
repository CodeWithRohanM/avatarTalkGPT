import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import TemplateAside from "./TemplateAside";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Actions/userActions";

const CategoryList = () => {

    const [categoriesStatus, setCategoriesStatus] = useState(false);

    const [celebratiesTypeStatus, setCelebratiesTypeStatus] = useState(false);

    const [getBorderWidth, setGetBorderWidth] = useState("");

    const dispatch = useDispatch();

    return <>

        <div className="flex flex-row w-screen h-screen">

            <TemplateAside />

            <section className={`mainAvatarGPTChatBox h-full flex-1 flex flex-col gap-y-10 items-center p-2 relative bg-gradient-to-b from-cyan-100 to-cyan-50`}>

                <Header getBorderColor="border-gray-700" getTextColor="text-black" />

                <div className="flex flex-col gap-y-8 w-full h-full items-center rounded-r-lg" id="userPrompt">

                    <div className="flex flex-col gap-y-12 w-full h-3/4 rounded-r-lg container mx-auto max-w-5xl bg-gradient-to-b from-purple-500 via-purple-400 to-purple-300 rounded-xl items-center p-12">



                        <div className="grid grid-cols-3 gap-x-4 gap-y-16 w-full h-fit">

                            <a href="/avatarGPT/business">
                                <div className="flex flex-row gap-x-6 w-full text-2xl font-bold tracking-wider px-4 py-3 border-4 border-white/50 hover:bg-white/5 hover:cursor-pointer transition ease-in-out duration-300 rounded-md shadow-inner items-center"
                                    onClick={() => {
                                        dispatch(getCategory("Business"));
                                    }}>

                                    <img src="/Images/innovation.png" className="w-8 h-8" alt="resetThread"></img>
                                    <h1>Business</h1>
                                </div></a>



                            <div className={`flex flex-col ${getBorderWidth} w-full`}>
                                <div className="flex flex-row gap-x-6 w-full text-2xl font-bold tracking-wider px-4 py-3 items-center 
                                border-4 border-white/50 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner" onClick={() => {
                                    // dispatch(getCategory("Celebraties"));
                                    setCelebratiesTypeStatus(!celebratiesTypeStatus);
                                    setGetBorderWidth((getBorderWidth) => celebratiesTypeStatus ? "" : "border-4 rounded-t-xl rounded-lg border-white/50");
                                    console.log(celebratiesTypeStatus);
                                }}>
                                    <img src="/Images/film.png" className="w-6 h-6" alt="resetThread"></img>
                                    <h1>Celebraties</h1>
                                </div>


                                {

                                    celebratiesTypeStatus && <div className="flex flex-col gap-y-3 w-full p-4" id="celebratiesTypes">

                                        <a href="/avatarGPT/celebratiesBollywood">
                                            <div className="flex flex-row gap-x-6 w-full px-4 py-3 text-xl font-bold tracking-wider items-center border-4 border-white/30 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner" onClick={() => {
                                                dispatch(getCategory("CelebratiesBollywood"));
                                            }}>
                                                <img src="/Images/film.png" className="w-6 h-6" alt="resetThread"></img>
                                                <h1>Bollywood</h1>
                                            </div>
                                        </a>

                                        <a href="/avatarGPT/celebratiesHollywood">
                                            <div className="flex flex-row gap-x-6 w-full px-4 py-3 text-xl font-bold tracking-wider items-center border-4 border-white/30 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner" onClick={() => {
                                                dispatch(getCategory("CelebratiesHollywood"));
                                            }}>
                                                <img src="/Images/film.png" className="w-6 h-6" alt="resetThread"></img>
                                                <h1>Hollywood</h1>
                                            </div>
                                        </a>

                                        <a href="/avatarGPT/celebraties">
                                            <div className="flex flex-row gap-x-6 w-full px-4 py-3 text-xl font-bold tracking-wider items-center border-4 border-white/30 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner" onClick={() => {
                                                dispatch(getCategory("CelebratiesSouth"));
                                            }}>
                                                <img src="/Images/film.png" className="w-6 h-6" alt="resetThread"></img>
                                                <h1>South Actors</h1>
                                            </div>
                                        </a>

                                    </div>
                                }
                            </div>

                            <a href="/avatarGPT/sports"><div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border-4 border-white/50 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner font-bold tracking-wider text-2xl"
                                onClick={() => {
                                    dispatch(getCategory("Sports"));
                                }}>

                                <img src="/Images/ball.png" className="w-8 h-8" alt="resetThread"></img>
                                <h1>Sports</h1>
                            </div></a>

                            <a href="/avatarGPT/influencers"><div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border-4 border-white/50 shadow-inner font-bold tracking-wider text-2xl rounded-md hover:cursor-pointer hover:bg-white/5 transition ease-in-out duration-300">
                                <img src="/Images/share.png" className="w-8 h-8" alt="resetThread"></img>
                                <h1>Influencers</h1>
                            </div></a>

                            <a href="/avatarGPT/authors"><div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border-4 border-white/50 hover:cursor-pointer hover:bg-white/5 transition ease-in-out duration-300 shadow-inner font-bold tracking-wider text-2xl rounded-md">
                                <img src="/Images/logout.png" className="w-8 h-8" alt="resetThread"></img>
                                <h1>Authors</h1>
                            </div></a>
                        </div>

                        <div className="flex w-full h-5/6 rounded-r-lg justify-center">
                            {/* <div className="flex items-center bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-800 8ounded-3xl"> */}
                            <img src="/Images/categorySelect.png" alt="beingCool" className=""></img>
                            {/* </div> */}
                        </div>


                    </div>

                </div>










            </section>
        </div>

    </>
};

export default CategoryList;