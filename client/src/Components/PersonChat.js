import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";

const PersonChat = () => {

    const pName = useSelector((state) => state.userReducer.personName);
    const pURL = useSelector((state) => state.userReducer.link);

    const getPersonImage = pName.split(" ")[0];

    console.log("Person Name = " + pName);
    console.log('Person URL = ' + pURL);

    const [showOutput, setShowOutput] = useState("");
    const [userInput, setUserInput] = useState("");
    const [requestedPrompt, setRequestedPrompt] = useState("");
    // const [personURL, setPersonURL] = useState("https://www.youtube.com/watch?v=xfGbyW6fs5w");
    let storeUserInput = "";


    const takeUserInteraction = (event) => {
        const getValue = event.target.value;
        setUserInput(getValue);
    };

    useEffect(() => {
        window.alert(pName + "!! Good Choice. Have a Blask!! ✋");
    }, []);

    const chatWithElon = async (event) => {
        try {
            event.preventDefault();

            document.getElementById("elon_interaction").style.display = "block";
            // getElonOnBoard();


            storeUserInput = userInput;
            setRequestedPrompt(userInput);
            setUserInput("");



            const getData = await fetch("/roleplayChat", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    userChat: `Pretend to be ${pName} and answer my questions. I will ask you some questions and you have to answer as if you are ${pName}. Dont take any other role. Dont reply anything like you understood. just reply as ${pName}. Conversations starts. Make it look completely as you are a real ${pName}.` + storeUserInput,
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


                {/* <div className="w-full bg-yellow-300 h-1/2">
                    <video src="/Images/Elon_Shuttle.mp4" className="object-cover" controls autoPlay></video> */}

                <div className="flex w-full h-1/3 justify-center items-center relative">
                    <video className="object-cover w-full h-full" autoPlay muted>
                        <source src="/Images/trip.mp4" type="video/mp4">
                        </source>
                        cbhekldjlsk

                    </video>
                    {/* <div className="w-full h-full">
                        <ReactPlayer url="https://www.youtube.com/watch?v=TRxf5hLZih4" width="100%" playing loop></ReactPlayer>
                    </div> */}

                    <div className="flex flex-col gap-y-4 absolute bottom-0">
                        <img src={`/Images/${getPersonImage}.png`} className="w-40 h-40 shadow-2xl rounded-full" alt="elon"></img>
                        {/* <h1 className="text-blue-900 font-bold text-4xl" id="tagLine">{pName}</h1> */}
                    </div>
                </div>
                {/* </div> */}





                <div className="flex flex-row gap-x-6 w-full container mx-auto max-w-screen-lg
                justify-center items-center p-2 border-b  border-black/10 text-black">
                    <img src="/Images/lightbulb.png" className="w-8 h-8" alt="user"></img>

                    {/* <h1>Hi, I am Elon. Lets have some chat. Ask me anything you want.</h1> */}
                    <h1>{`Heyy, I am ${pName}. Lts have some fun chat..`}</h1>

                </div>



                {/* <div className="flex flex-row space-x-2 bg-gray-600 w-full container mx-auto max-w-screen-lg items-center p-4 text-white rounded-b-md overflow-scroll h-fit hidden"
                    id="elon_interaction">
                    <img src="/Images/elonRounded.png" className="w-8 h-8" alt="user"></img>

                    <h1 className="">{showOutput}</h1>

                </div> */}


                <div className="flex flex-col w-full hidden h-full" id="elon_interaction">
                    <div className="flex flex-row gap-x-4 bg-gray-600 w-full container mx-auto max-w-screen-lg p-2 text-white overflow-scroll border-b border-white/20" id="elon_interaction">
                        <img src="/Images/shiba.jpeg" className="w-8 h-8 rounded-full" alt="user"></img>

                        <h1 className="leading-7">{requestedPrompt}</h1>

                    </div>

                    <div className="container mx-auto max-w-screen-lg  text-white overflow-scroll h-1/2" >

                        <div className="flex flex-row gap-x-4 w-full bg-gray-600 h-fit p-2 rounded-b-md">
                            <img src={`/Images/${getPersonImage}.png`} className="w-8 h-8" alt="elon"></img>

                            <h1 className="leading-7">{showOutput}</h1>
                        </div>

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
        </div >

    </>
};

export default PersonChat;