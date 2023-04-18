import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";

const ElonChat = () => {

    const getStaticChatResponse = useSelector((state) => state.userReducer.staticChatResponse);
    const dispatch = useDispatch();


    const [showOutput, setShowOutput] = useState("");
    const [userInput, setUserInput] = useState("");
    const [requestedPrompt, setRequestedPrompt] = useState("");
    let storeUserInput = "";


    const takeUserInteraction = (event) => {
        const getValue = event.target.value;
        setUserInput(getValue);
    };


    const chatWithElon = async (event) => {
        try {
            event.preventDefault();


            // window.alert(userInput);
            document.getElementById("elon_interaction").style.display = "block";
            // getElonOnBoard();


            storeUserInput = userInput;
            setRequestedPrompt(userInput);
            setUserInput("");



            const getData = await fetch("/elonChat", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    userChat: "Pretend to be Elon Musk and answer my questions. I will ask you some questions and you have to answer as if you are Elon Musk. Dont take any other role. Dont reply anything like you understood. just reply as Elon Musk. Conversations starts. Make it look completely as you are a real Elon musk." + storeUserInput,
                }),
            });

            const getResponse = await getData.json();
            setShowOutput(getResponse);

        } catch (err) {
            console.warn(err);
        }

    }







    // useEffect(()=>{
    //     getElonOnBoard();

    // }, []);



    return <>
        <div className="flex flex-row w-screen h-screen">

            <aside className="avatarGPTSideMenu h-full border-r border-white/5 p-2 flex flex-col justify-between">
                <div className="flex flex-row gap-x-6 border border-white/20 px-4 py-3 w-full hover:bg-white/5 hover:cursor-pointer transition ease-in-out duration-300 rounded-md shadow-inner items-center"
                >
                    <span className="text-xl">+</span>
                    New Chat
                </div>

                <div className="flex flex-col gap-y-2 w-full">

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 border border-white/10 hover:bg-white/5 hover:cursor-pointer transition ease-in-out duration-300 rounded-md shadow-inner items-center">
                        <img src="/Images/circular.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>Reset Thread</h1>
                    </div>

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner">
                        <img src="/Images/lightMode.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>Light Mode</h1>
                    </div>

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner">
                        <img src="/Images/discord.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>OpenAI Discord</h1>
                    </div>

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 shadow-inner rounded-md hover:cursor-pointer hover:bg-white/5 transition ease-in-out duration-300">
                        <img src="/Images/share.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>Learn More</h1>
                    </div>

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 hover:cursor-pointer hover:bg-white/5 transition ease-in-out duration-300 shadow-inner runded-md">
                        <img src="/Images/logout.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>LogOut</h1>
                    </div>

                </div>

            </aside>







            <section className={`mainAvatarGPTChatBox h-full flex-1 flex flex-col gap-y-3 items-center p-2 relative`}>

                <Header getBorderColor="border-gray-700" getTextColor="text-black" />

                <div className="flex flex-col gap-y-4 bg-black/40 w-1/3 items-center py-4">
                    <img src="/Images/elonRounded.png" className="w-40 h-40" alt="elon"></img>
                    <h1 className="text-blue-900 font-bold text-4xl" id="tagLine">Elon</h1>

                </div>


                <div className="flex flex-row gap-x-6 bg-gray-600 w-full container mx-auto max-w-screen-lg
                justify-center items-center p-2 text-white rounded-t-md border-b border-white/10">
                    <img src="/Images/lightbulb.png" className="w-8 h-8" alt="user"></img>

                    {/* <h1>Hi, I am Elon. Lets have some chat. Ask me anything you want.</h1> */}
                    <h1>Heyy, I am Elon. Lts have some fun chat..</h1>

                </div>



                {/* <div className="flex flex-row space-x-2 bg-gray-600 w-full container mx-auto max-w-screen-lg items-center p-4 text-white rounded-b-md overflow-scroll h-fit hidden"
                    id="elon_interaction">
                    <img src="/Images/elonRounded.png" className="w-8 h-8" alt="user"></img>

                    <h1 className="">{showOutput}</h1>

                </div> */}


                <div className="flex flex-col w-full hidden h-full" id="elon_interaction">
                    <div className="flex flex-row gap-x-4 bg-gray-600 w-full container mx-auto max-w-screen-lg p-2 text-white overflow-scroll border-b border-white/20" id="elon_interaction">
                        <img src="/Images/profile.png" className="w-8 h-8" alt="user"></img>

                        <h1 className="leading-7">{requestedPrompt}</h1>

                    </div>

                    <div className="flex flex-row gap-x-4 bg-gray-600 w-full container mx-auto max-w-screen-lg p-2 text-white rounded-b-md overflow-scroll h-1/3" >
                        <img src="/Images/elonRounded.png" className="w-8 h-8" alt="elon"></img>

                        <h1 className="leading-7">{showOutput}</h1>

                    </div>
                </div>







                <form className="inputBox flex container max-w-4xl px-4 py-1 gap-x-3 absolute bottom-20 shadow-xl focus:outline-none items-center rounded-md" onSubmit={chatWithElon}>

                    <input
                        type="text"
                        className="w-full text-white font-normal bg-transparent appearance-none focus:outline-none border-none py-2"
                        placeholder="Send a Message.."
                        value={userInput}
                        onChange={takeUserInteraction}></input>

                    <span className="hover:cursor-pointer text-xl hover:bg-black/40 px-3 rounded-md" onClick={chatWithElon}>↗️</span>

                </form>

                <div className="flex flex-col items-center justify-center w-full absolute bottom-4 px-2">
                    <h1 className="text-md">Free Research Preview: ChatGPT is optimised for dialogue. Our goal is to make AI systems more natural to interact with, and your feeback will help us improve</h1>
                    <h1> our systems and make them safer.</h1>
                </div>




            </section>
        </div>

    </>
};

export default ElonChat;