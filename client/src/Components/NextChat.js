import React from "react";
import TemplateAside from "./TemplateAside";
import Header from "./Header";

const NextChat = () => {

    return <>

        <div className="flex flex-row w-screen h-screen">

            <TemplateAside />

            <section className={`mainAvatarGPTChatBox h-full flex-1 flex flex-col gap-y-10 items-center p-2 relative bg-gradient-to-b from-cyan-100 to-cyan-50`}>

                <Header getBorderColor="border-gray-700" getTextColor="text-black" />


                <h1 className="font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-600 to-blue-700 px-40 py-2 rounded-md shadow-2xl bg-black/20" id="tagLine">AvatarGPT</h1>

                <div className="flex flex-col gap-y-8 w-full h-full items-center rounded-r-lg" id="userPrompt">

                    <div className="flex flex-row  w-full h-full rounded-r-lg container mx-auto max-w-5xl 
                    bg-gradient-to-b from-purple-500 via-purple-400 to-purple-300 rounded-xl">

                        <div className="flex flex-col gap-y-6 w-1/2 h-full rounded-l-lg animate-text  justify-center pl-10">
                            <h1 className="text-6xl font-bold text-white animate-text pb-1">Keep The Fun Going!</h1>

                            <h1 className="text-3xl font-bold text-black/60">Dont Stop Here! <br></br>Meet Your Next Favourite Star ⭐ </h1>

                            <h1 className="text-xl leading-relaxed text-black/80">Discover New Connections, Meet Other Fascinating Personalities. And Again, <span className="font-bold text-black/60">With No Limits or Boundaries!</span></h1>

                            <a href="/avatarGPT"><button type="button" className="bg-red-500 px-8 w-fit py-2 rounded-md text-white font-bold text-xl">Find Your Next Star <span className="ml-2 text-xl">↗️</span></button></a>

                        </div>

                        <div className="flex items-center flex-1 h-full rounded-r-lg justify-end">
                            {/* <div className="flex items-center bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 rounded-3xl"> */}
                            <img src="/Images/nextChat.gif" alt="beingCool" className="rounded-xl"></img>
                            {/* </div> */}
                        </div>
                    </div>

                </div>










            </section>
        </div>

    </>
};

export default NextChat;