import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/api/Login";
import Create from "../components/api/Create";



function RouteAPi() {
  return (
    <BrowserRouter>
      <div className="font-Poppins bg-ghostWhite">
        
        <Routes>
          <Route path="/" element={<Home />} />         

          <Route path="/login" element={<Login />} />
          <Route path="/Create" element={<Create />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RouteAPi;
