import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";

export const GameGram = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>


    )
};