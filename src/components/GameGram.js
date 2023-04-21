import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Error } from "./Pages/Error";

export const GameGram = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} errorElement={<Error/>}/>
            <Route path="/profile" element={<Profile/>} errorElement={<Error/>}/>
            <Route path="/login" element={<Login/>} errorElement={<Error/>}/>
            <Route path="/register" element={<Register/>} errorElement={<Error/>}/>
        </Routes>


    )
};