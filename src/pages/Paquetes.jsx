import React from "react";
import rash from "../assets/rash.jpg";
import rash2 from "../assets/rash2.jpg";
import ciro from "../assets/ciro.jpg"
import paquetes from "../css/paquetes.css"
import Footer from "../components/Footer"

const Paquetes = () => {
  return (
    <>
 

      <img src={ciro} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title tituloPaq text-white">Corazón de sandía</h5>
        <p className="card-text text-white textoPaq position-absolute">
          <p>

          15 fotografias digitales, sólo de la mascota
          </p>
          <p>

          Dos colores de fondo a eleccion
          </p>
          <p>

          Entrega vía email en alta calidad
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quaerat, culpa cupiditate adipisci minus necessitatibus error aliquid! Repellat, magnam. Cum.</p>

          
       
        </p>
       
      </div>
    <Footer/>
   
    </>

  );
};

export default Paquetes;
