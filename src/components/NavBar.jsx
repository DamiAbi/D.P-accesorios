import React from "react";
import hokeeLogo from "../assets/hokeeLogo.png";
import navBar from "../css/navBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className=" ContenedorN  container-fluid   ">
        <div className="LogoContenedor ">

        <a className="navbar-brand " href="#">
          <img className="imgNav " src={hokeeLogo} alt="Bootstrap" width="220" height="150" />
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
              <a className="nav-link " aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Galería
              </a>
            </li>
            <li className="nav-item " id="Experiencias">
              <a className="nav-link" href="#Experiencias">
                Experiencias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Preguntas frecuentes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/paquetes">
                Paquetes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Presentacion">
                Sobre mí
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
