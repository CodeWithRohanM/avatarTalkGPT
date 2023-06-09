import React, { useState } from "react";
import Header from "./Header";

const TalkGPT = () => {


    const [userInput, setUserInput] = useState("");
    const [showOutput, setShowOutput] = useState("");

    // const [userInteraction, setUserInteraction] = useState([{
    //     input: "Heyy",
    //     output: "How Can I Assist You Today??",
    // }]);

    const [requestedPrompt, setRequestedPrompt] = useState("");
    const [loading, setLoading] = useState(".");
    const [showLoader, setShowLoader] = useState(true);
    const [positionItem, setPositionItem] = useState("p-2");
    let storeUserInput = "";


    const updateUserInput = (event) => {
        const getValue = event.target.value;

        setUserInput(getValue);
    };



    const getAssistance = async (event) => {
        try {
            event.preventDefault();

            // setPositionItem("py-10");
            setRequestedPrompt(userInput);
            setShowLoader(true);

            storeUserInput = userInput;
            setUserInput("");


            var getInterval = setInterval(() => {
                setLoading((loading) => loading.length === 4 ? "." : loading + ".");

                return () => {
                    setLoading("");
                }
            }, 300);

            document.getElementById("staticPrompts").style.visibility = "hidden";
            document.getElementById("userPrompt").style.display = "block";



            // window.alert(userInput);

            setShowOutput("");


            const getData = await fetch("http://localhost:8080", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    questions: storeUserInput,
                })
            });


            const getResponse = await getData.json();

            console.log("Getting response from Assistance..");



            setTimeout(() => {
                setShowLoader(false);
                // setUserInteraction([...userInteraction, {
                //     input: storeUserInput,
                //     output: getResponse,
                // }])
                setShowOutput(getResponse);
                clearInterval(getInterval);
                // storeUserInput = "";

                console.log(getResponse);
            }, 100);



        } catch (err) {
            console.warn(err);
        }


    };





    return <>

        <div className="flex flex-row w-screen h-screen">

            <aside className="sideMenu h-full border-r border-white/5 p-2 flex flex-col justify-between">
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







            <section className={`mainChatBox h-full flex-1 flex flex-col gap-y-20 items-center ${positionItem} relative`}>

                <Header getBorderColor="border-white/10" getTextColor="text-gray-200" />

                <h1 className="text-gray-200 font-bold text-4xl" id="tagLine">TalkGPT</h1>







                <div className="flex flex-col w-full hidden" id="userPrompt">

                    <div className="flex flex-row gap-x-6 bg-gray-600 w-full container mx-auto max-w-screen-lg items-center p-4 text-white rounded-t-md border-b border-white/10">
                        <img src="/Images/lightbulb.png" className="w-8 h-8" alt="user"></img>

                        <h1>{requestedPrompt}</h1>

                    </div>

                    <div className="flex flex-row gap-x-6 bg-gray-600 w-full container mx-auto max-w-screen-lg items-center p-4 text-white rounded-b-md overflow-y-scroll h-3/4">
                        <img src="/Images/log.png" className="w-8 h-8" alt="user"></img>

                        <h1 className="leading-7">{showLoader ? loading : showOutput}</h1>

                    </div>
                </div>






                <div className="flex flex-row gap-x-3 container mx-auto max-w-screen-md pb-20 text-white" id="staticPrompts">

                    <div className="flex flex-col gap-y-4 w-1/3 items-center">
                        <div className="flex flex-col gap-y-2 items-center w-full">
                            <img src="/Images/sun.png" className="w-6 h-6" alt="examples"></img>
                            <h1 className="text-xl">Examples</h1>
                        </div>

                        <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md
       hover:bg-black/20">"Explain Quantum Computing In Simple Terms"</button>

                        <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md hover:bg-black/20">"Got any creative ideas for a 10 year old’s birthday?" →</button>

                        <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md hover:bg-black/20">"How do I make an HTTP request in Javascript?" →</button>

                    </div>

                    <div className="flex flex-col gap-y-4 w-1/3 items-center">
                        <div className="flex flex-col gap-y-2 w-full items-center">
                            <img src="/Images/light-bolt.png" className="w-6 h-6" alt="capabilities"></img>
                            <h1 className="text-xl">Capabilities</h1>

                        </div>

                        <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md hover:none">Remembers what user said earlier in the conversation</button>

                        <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">Allows user to provide follow-up corrections</button>


                        <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">Trained to decline inappropriate requests</button>

                    </div>

                    <div className="flex flex-col gap-y-4 w-1/3 items-center">
                        <div className="flex flex-col gap-y-2 w-full items-center">
                            <img src="/Images/alert.png" className="w-6 h-6" alt="limitations"></img>
                            <h1 className="text-xl">Limitations</h1>

                        </div>

                        <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">May occasionally generate incorrect information</button>

                        <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">May occasionally produce harmful instructions or biased content</button>


                        <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">Limited knowledge of world and events after 2021</button>

                    </div>
                </div>



                <form onSubmit={getAssistance} className="inputBox flex container max-w-4xl px-4 py-1 gap-x-3 absolute bottom-20 shadow-xl focus:outline-none items-center rounded-md">

                    <input
                        type="text"
                        className="w-full text-white font-normal bg-transparent appearance-none focus:outline-none border-none py-2"
                        placeholder="Send a Message.."
                        value={userInput}
                        onChange={updateUserInput}></input>

                    <span className="hover:cursor-pointer text-xl hover:bg-black/40 px-3 rounded-md" onClick={getAssistance}>↗️</span>

                </form>

                <div className="flex flex-col items-center justify-center w-full absolute bottom-4 px-2">
                    <h1 className="text-md">Free Research Preview: ChatGPT is optimised for dialogue. Our goal is to make AI systems more natural to interact with, and your feeback will help us improve</h1>
                    <h1> our systems and make them safer.</h1>
                </div>




            </section>
        </div>

    </>
};

export default TalkGPT;