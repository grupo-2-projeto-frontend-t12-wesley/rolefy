import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import MainPage from "../Pages/mainPage";
import Register from "../Pages/register";

function RoutsMap() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/isLoged" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }
  export default RoutsMap;