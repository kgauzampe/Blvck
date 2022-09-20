import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auction from './Components/Auction/Auction';
import Home from './Components/Home/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
 
        <Route  path="/" element={<Home />} />
        <Route path="Auction" element={<Auction />} />
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
