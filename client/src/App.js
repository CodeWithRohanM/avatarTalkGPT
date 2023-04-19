import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import TalkGPT from "./Components/TalkGPT";
import AvatarGPT from "./Components/AvatarGPT";
import Extensions from "./Components/Extensions";
import { Routes, Route } from "react-router-dom";
import PersonChat from "./Components/PersonChat";
import PersonCategoryList from "./Components/PersonCategoryList";


// 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

const App = () => {



  return <>

    <div className="flex flex-row w-screen h-screen">

      <Routes>
        <Route exact path="/" element={<TalkGPT />}></Route>
        <Route exact path="/avatarGPT" element={<AvatarGPT />}></Route>
        <Route exact path="/extensions" element={<Extensions />}></Route>
        <Route exact path="/avatarGPT/roleplay" element={<PersonChat />}></Route>
        <Route exact path="/avatarGPT/category" element={<PersonCategoryList/>}></Route>
      </Routes>

    </div>

  </>
};

export default App;