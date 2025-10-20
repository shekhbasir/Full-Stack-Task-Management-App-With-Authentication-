import React from "react";
import Login from "./AllLogin/Login.jsx";
import Signup from "./AllSignup/Signup.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./AllHome/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
