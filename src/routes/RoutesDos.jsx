import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Experiencias from "../components/Experiencias"


import Paquetes from "../pages/Paquetes";
import SobreMi from "../pages/SobreMi";

import NotFound from "../pages/NotFound";
import Galeria from "../pages/Galeria";
import Login from "../pages/Login";
import Registro from "../pages/Registro";


const RoutesDos = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/sobremi" element={<SobreMi />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesDos;
