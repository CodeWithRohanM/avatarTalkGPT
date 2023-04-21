import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {

    return <>
        <div className={`p-2 flex flex-row justify-end items-center border-b ${props.getBorderColor} container mx-auto w-11/12`}>
            <div className={`flex flex-row justify-evenly w-1/2 px-4 text-xl ${props.getTextColor}`}>
                <NavLink to="/"><h1 className="px-4 py-1 hover:bg-black/60 transition ease-in-out duration-300 hover:cursor-pointer rounded-md hover:text-white">TalkGPT</h1></NavLink>

                <NavLink to="/avatarGPT"><h1 className="px-4 py-1 hover:bg-black/60 transition ease-in-out duration-300 hover:cursor-pointer rounded-md hover:text-white">AvatarGPT</h1></NavLink>

                <NavLink to="/extensions"><h1 className="px-4 py-1 hover:bg-black/60 transition ease-in-out duration-300 hover:cursor-pointer rounded-md hover:text-white">Extensions</h1></NavLink>
            </div>
        </div>

    </>
};

export default Header;