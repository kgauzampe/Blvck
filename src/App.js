import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auction from './Components/Auction/Auction';
import Home from './Components/Home/Home'
import Login from './Components/Auth/Login';
import Register from './Components/Auth/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
 
        <Route  path="/" element={<Home />} />
        <Route path="Auction" element={<Auction />} />
        <Route path="Login" element={<Login />} />
        <Route path="/SignUp" element={<Register />} />
   
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
