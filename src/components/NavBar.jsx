import React from "react";

import navBar from "../css/navBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className=" ContenedorN  container-fluid   ">
        <div className="LogoContenedor ">

        <a className="navbar-brand " href="#">
          D.P
        </a>
        </div>
        <button
        id="NavButtom"
          className="  navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse itemUl " id="navbarNav">
          <div className="ItemsContenedor">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/">
                Home
              </a>
            </li>
          
            <li className="nav-item " >
              <a className="nav-link" href="#Experiencias">
                Experiencias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#preguntas">
                Preguntas frecuentes
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#Presentacion">
                Sobre mí
              </a>
            </li>

             
            <li className="nav-item">
              <a className="nav-link" href="#Contacto">
                Contactos
              </a>

            </li>
              <li className="nav-item">
              <a className="nav-link" href="/galeria">
                Galeria
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
