import React from "react";
import experiencias from "../css/experiencias.css";
import bb from "../assets/bb.jpg";
import clienta from "../assets/clienta.jpg";
import quince from "../assets/quince.jpg";



const PreguntasFrecuentes = () => {
  return (
    <>
      <h1 className="Titulop"> Experiencias (frase emotiva)</h1>

      <div className="cardE mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={bb} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body cardEx">
              <h5 className="card-title mb-3 ">
                <strong> Gini y Robert</strong>
              </h5>
              <p className="card-text textE">
                “Nuestros anillos soñados en nuestra boda soñada."
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
            <img src={clienta} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body cardEx ">
              <h5 className="card-title mb-3">
                <strong>Irene </strong>
              </h5>
              <p className="card-text textE ">
                “Es increible cómo sin conocerme hiciste las joyas perfectas para mi."
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
            <img src={quince} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body cardEx">
              <h5 className="card-title mb-3 ">
                <strong> Silvia</strong>
              </h5>
              <p className="card-text textE ">
                "Amé totalmente mi tiara. La mejor elección siempre.”
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
