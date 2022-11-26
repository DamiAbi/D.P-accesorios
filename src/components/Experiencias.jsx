import React from "react";
import experiencias from "../css/experiencias.css";
import gini from "../assets/gini.jpg";
import huma1 from "../assets/huma1.jpg";
import otti from "../assets/otti.jpg";



const PreguntasFrecuentes = () => {
  return (
    <>
      <h1 className="Titulop"> Experiencias (frase emotiva)</h1>

      <div className="cardE mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={gini} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body cardEx">
              <h5 className="card-title mb-3 ">
                <strong> Gini Rohmer Litzmann</strong>
              </h5>
              <p className="card-text textE">
                “Tremendas las fotos!!!! Estoy enamorada!!! Gracias! Hace años
                quería sacarles fotos así a mis pequeños, gracias por cumplir mi
                sueño!"
              </p>
              <span className="text-dark">
                San Miguel de Tucumán - Argentina - 2020
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="hrp" />

      <div className="cardE mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={huma1} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body cardEx ">
              <h5 className="card-title mb-3">
                <strong>Irene y Humahuaca</strong>
              </h5>
              <p className="card-text textE ">
                “Ayyyy Laurita muero de amor con cada una de las fotos! No puedo
                sacarme la sonrisa de la boca! Te juro que captaste a la hum que
                es ella en acda una de las fotos! Y es para siempre! Ayy me voy
                a abrazarla!!! Bello bello bello todo!!!
              </p>
              <span className="text-dark">
                San Miguel de Tucumán - Argentina - 2020
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="hrp" />
      <div className="cardE mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={otti} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body cardEx">
              <h5 className="card-title mb-3 ">
                <strong> Silvia y Otti</strong>
              </h5>
              <p className="card-text textE ">
                “Ay Lau recién termino de trabajar y estoy viendo las fotos,
                unas ganas de llorar. Sus ojos en todas las fotos! lo amo tanto!
                Gracias!!”
              </p>
              <span className="text-dark">
                San Miguel de Tucumán - Argentina - 2022
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="hrp" />
    </>
  );
};

export default PreguntasFrecuentes;
