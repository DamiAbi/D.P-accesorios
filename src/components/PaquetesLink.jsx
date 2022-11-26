import React from "react";
import paquetesLink from "../css/paquetesLink.css"


const PaquetesLink = () => {
  return (
    <section id="novedades" className="ancla">
  <div className="container-fluid">
    <div className="row">
      <div className="col p-0 card">
        
          <div className="parallax"></div>
          <div className="card-img-overlay text-center">
            <h5 className="card-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, excepturi?
            </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet.
            </p>
            <button type="button" className="btn btn-light btn-card">
            <a className="nav-link" href="/paquetes"> Conoce los paquetes aquí </a>
             
            </button>
          </div>
        
      </div>
    </div>
  </div>
</section>
  )
}


export default PaquetesLink
