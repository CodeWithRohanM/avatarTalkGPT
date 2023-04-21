import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Actions/userActions";
import { NavLink } from "react-router-dom";

const TemplateAside = () => {

    const dispatch = useDispatch();

    const [categoriesStatus, setCategoriesStatus] = useState(false);


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

                    <img src="/Images/click.png" className="w-6 h-6" alt="resetThread"></img>
                    <h1>Choose Category</h1>
                </div>

                {
                    categoriesStatus &&
                    <div className="flex flex-col gap-y-2 h-1/2 w-full p-2" id="displayCategories">

                        <NavLink to="/avatarGPT/business"><div className="flex flex-row gap-x-6 w-full px-4 py-3 border border-white/30 hover:bg-white/5 hover:cursor-pointer transition ease-in-out duration-300 rounded-md shadow-inner items-center"
                            onClick={() => {
                                dispatch(getCategory("Business"));
                            }}>

                            <img src="/Images/innovation.png" className="w-6 h-6" alt="resetThread"></img>
                            <h1>Business</h1>
                        </div></NavLink>

                        <NavLink to="/avatarGPT/celebraties"><div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/30 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner" onClick={() => {
                            dispatch(getCategory("Celebraties"));
                        }}>
                            <img src="/Images/film.png" className="w-6 h-6" alt="resetThread"></img>
                            <h1>Celebraties</h1>
                        </div></NavLink>

                        <NavLink to="/avatarGPT/sports"><div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/30 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner"
                            onClick={() => {
                                dispatch(getCategory("Sports"));
                            }}>

                            <img src="/Images/ball.png" className="w-6 h-6" alt="resetThread"></img>
                            <h1>Sports</h1>
                        </div></NavLink>

                        <NavLink to="/avatarGPT/influencers"><div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/30 shadow-inner rounded-md hover:cursor-pointer hover:bg-white/5 transition ease-in-out duration-300">
                            <img src="/Images/share.png" className="w-6 h-6" alt="resetThread"></img>
                            <h1>Influencers</h1>
                        </div></NavLink>

                        <NavLink to="/avatarGPT/authors"><div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/30 hover:cursor-pointer hover:bg-white/5 transition ease-in-out duration-300 shadow-inner ru</NavLink>nded-md">
                            <img src="/Images/logout.png" className="w-6 h-6" alt="resetThread"></img>
                            <h1>Authors</h1>
                        </div></NavLink>


                    </div>
                }
            </div>


        </aside>

    </>
};

export default TemplateAside;