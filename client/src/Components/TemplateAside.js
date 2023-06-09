import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Actions/userActions";
import { NavLink } from "react-router-dom";

const TemplateAside = () => {

    const dispatch = useDispatch();

    const [categoriesStatus, setCategoriesStatus] = useState(false);

    const [celebratiesTypeStatus, setCelebratiesTypeStatus] = useState(false);

    const [getBorderWidth, setBorderWidth] = useState("");


    return <>
        <aside className="avatarGPTSideMenu h-full border-r border-white/5 p-2 flex flex-col gap-y-6 font-bold text-lg">
            <div className="flex flex-row gap-x-6 border border-white/20 px-4 py-3 w-full hover:bg-white/5 hover:cursor-pointer transition ease-in-out duration-300 rounded-md shadow-inner items-center"
            >
                <span className="text-xl"><img src="/Images/chat.png" className="w-6 h-6" alt="stars"></img></span>
                Meet Your Stars ⭐
            </div>



            <div className="flex flex-col gap-y-4 bg-transparent border-2 border-white/40 w-full rounded-lg shadow-inner">
                <div className="flex flex-row gap-x-6 w-full px-4 py-3 border border-white/10 hover:bg-white/5 hover:cursor-pointer transition ease-in-out duration-300 rounded-md shadow-inner items-center"
                    onClick={() => {
                        setCategoriesStatus(!categoriesStatus);

                    }}>

                    <img src="/Images/click.png" className="w-6 h-6 animate-pulse" alt="resetThread"></img>
                    <h1>Choose Category</h1>
                </div>

                {
                    categoriesStatus &&
                    <div className="flex flex-col gap-y-2 h-1/2 w-full p-2" id="displayCategories">

                        <a href="/avatarGPT/business"><div className="flex flex-row gap-x-6 w-full px-4 py-3 border border-white/30 hover:bg-white/5 hover:cursor-pointer transition ease-in-out duration-300 rounded-md shadow-inner items-center"
                            onClick={() => {
                                dispatch(getCategory("Business"));
                            }}>

                            <img src="/Images/innovation.png" className="w-6 h-6" alt="resetThread"></img>
                            <h1>Business</h1>
                        </div></a>


                        <div className={`flex flex-col ${getBorderWidth} w-full`}>
                            <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/30 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner" onClick={() => {
                                // dispatch(getCategory("Celebraties"));
                                setCelebratiesTypeStatus(!celebratiesTypeStatus);
                                setBorderWidth((getBorderWidth) => celebratiesTypeStatus ? "" : "border-4 rounded-lg");
                                console.log(celebratiesTypeStatus);
                            }}>
                                <img src="/Images/film.png" className="w-6 h-6" alt="resetThread"></img>
                                <h1>Celebraties</h1>
                            </div>


                            {

                                celebratiesTypeStatus && <div className="flex flex-col gap-y-3 w-full p-4" id="celebratiesTypes">

                                    <a href="/avatarGPT/celebratiesBollywood">
                                        <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border-4 border-white/30 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner" onClick={() => {
                                            dispatch(getCategory("CelebratiesBollywood"));
                                        }}>
                                            <img src="/Images/film.png" className="w-6 h-6" alt="resetThread"></img>
                                            <h1>Bollywood</h1>
                                        </div>
                                    </a>

                                    <a href="/avatarGPT/celebratiesHollywood">
                                        <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border-4 border-white/30 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner" onClick={() => {
                                            dispatch(getCategory("CelebratiesHollywood"));
                                        }}>
                                            <img src="/Images/film.png" className="w-6 h-6" alt="resetThread"></img>
                                            <h1>Hollywood</h1>
                                        </div>
                                    </a>

                                    <a href="/avatarGPT/celebraties">
                                        <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border-4 border-white/30 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner" onClick={() => {
                                            dispatch(getCategory("CelebratiesSouth"));
                                        }}>
                                            <img src="/Images/film.png" className="w-6 h-6" alt="resetThread"></img>
                                            <h1>South Actors</h1>
                                        </div>
                                    </a>

                                </div>
                            }
                        </div>

                        {/* </a> */}

                        <a href="/avatarGPT/sports"><div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/30 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner"
                            onClick={() => {
                                dispatch(getCategory("Sports"));
                            }}>

                            <img src="/Images/ball.png" className="w-6 h-6" alt="resetThread"></img>
                            <h1>Sports</h1>
                        </div></a>

                        <a href="/avatarGPT/historyPeople"><div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/30 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner"
                            onClick={() => {
                                dispatch(getCategory("HistoryPeople"));
                            }}>

                            <img src="/Images/ball.png" className="w-6 h-6" alt="resetThread"></img>
                            <h1>Inventors & History Persons</h1>
                        </div></a>

                        <a href="/avatarGPT/influencers"><div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/30 shadow-inner rounded-md hover:cursor-pointer hover:bg-white/5 transition ease-in-out duration-300">
                            <img src="/Images/share.png" className="w-6 h-6" alt="resetThread"></img>
                            <h1>Influencers</h1>
                        </div></a>

                        <a href="/avatarGPT/authors"><div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/30 hover:cursor-pointer hover:bg-white/5 transition ease-in-out duration-300 shadow-inner rounded-md">
                            <img src="/Images/logout.png" className="w-6 h-6" alt="resetThread"></img>
                            <h1>Authors</h1>
                        </div></a>


                    </div>
                }
            </div>


        </aside>

    </>
};

export default TemplateAside;