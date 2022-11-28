import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Experiencias from "../components/Experiencias"

import SobreMi from "../pages/SobreMi";

import NotFound from "../pages/NotFound";

import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Galeria from "../pages/Galeria";


const RoutesDos = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/experiencias" element={<Experiencias />} />
       
        <Route path="/sobremi" element={<SobreMi />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/galeria" element={<Galeria />} />

        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </>
  );
};

export default RoutesDos;
