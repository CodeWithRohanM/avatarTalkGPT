import React, { useState } from "react";
import "./App.css";


// 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

const App = () => {


  const [userInput, setUserInput] = useState("");
  const [showOutput, setShowOutput] = useState("");


  const updateUserInput = (event) => {
    const getValue = event.target.value;

    setUserInput(getValue);
  };

  const getAssistance = async (event) => {
    try {
      event.preventDefault();

      document.getElementById("staticPrompts").style.visibility = "hidden";
      document.getElementById("userPrompt").style.display = "block";

      window.alert(userInput);

      setShowOutput("");

      const getData = await fetch("http://localhost:8080", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questions: userInput,
        })
      });
      setUserInput("");


      const getReponse = await getData.json();

      console.log("Getting response from Assistance..");

      setShowOutput(getReponse);

      console.log(getReponse);


    } catch (err) {
      console.warn(err);
    }


  };



  return <>
    <div className="flex flex-row w-screen h-screen">

      <aside className="sideMenu h-full border-r border-gray-400 p-2">
        <div className="flex flex-row gap-x-6 border border-gray-500 px-4 py-2 w-full hover:opacity-75 hover:cursor-pointer transition ease-in-out duration-300">
          <span>+</span>
          New Chat
        </div>
      </aside>



      <section className="mainChatBox h-full flex-1 flex flex-col gap-y-20 items-center py-40 relative">

        <h1 className="text-gray-200 font-bold text-4xl">ChatGPT</h1>

        <div className="bg-yellow-300 flex flex-col gap-y-4 w-full hidden" id="userPrompt">

          <div className="flex flex-row gap-x-6 bg-gray-600 w-full container mx-auto max-w-screen-lg items-center p-2 text-white">
            <img src="/Images/profile.png" className="w-12 h-12" alt="user"></img>

            <h1>User</h1>

          </div>

          <div className="flex flex-row gap-x-6 bg-gray-600 w-full container mx-auto max-w-screen-lg items-center p-2 text-white">
            <img src="/Images/profile.png" className="w-12 h-12" alt="user"></img>

            <h1>{showOutput}</h1>

          </div>
        </div>

        <div className="flex flex-row gap-x-3 container mx-auto max-w-screen-md pb-20 text-white" id="staticPrompts">

          <div className="flex flex-col gap-y-4 w-1/3 items-center">
            <h1>Examples</h1>

            <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">"Explain Quantum Computing In Simple Terms"</button>

            <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">"Got any creative ideas for a 10 year old’s birthday?" →</button>

            <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">"How do I make an HTTP request in Javascript?" →</button>

          </div>

          <div className="flex flex-col gap-y-4 w-1/3 items-center">
            <h1>Capabilities</h1>

            <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">Remembers what user said earlier in the conversation</button>

            <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">Allows user to provide follow-up corrections</button>


            <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">Trained to decline inappropriate requests</button>

          </div>

          <div className="flex flex-col gap-y-4 w-1/3 items-center">
            <h1>Limitations</h1>

            <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">May occasionally generate incorrect information</button>

            <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">May occasionally produce harmful instructions or biased content</button>


            <button type="button" className="px-4 py-3 text-sm bg-white/5 rounded-md">Limited knowledge of world and events after 2021</button>

          </div>
        </div>



        <form onSubmit={getAssistance} className="border-gray-400 flex container max-w-4xl border bg-gray-600 px-4 py-2 gap-x-3 absolute bottom-20">

          <input
            type="text"
            className="w-full text-white font-bold bg-transparent"
            placeholder="Send a Message.."
            value={userInput}
            onChange={updateUserInput}></input>

          <span className="hover:cursor-pointer" onClick={getAssistance}>↗️</span>

        </form>

        <div className="flex flex-col items-center justify-center w-full absolute bottom-4">
          <h1 className=" ">Free Research Preview: ChatGPT is optimised for dialogue. Our goal is to make AI systems more natural to interact with, and your feeback will help us improve</h1>
          <h1> our systems and make them safer.</h1>
        </div>




      </section>
    </div>

  </>
};

export default App;