import React from "react";
import otto1 from "../assets/otto1.jpg";
import blanca3 from "../assets/blanca3.jpg";
import slider6 from "../assets/slider6.jpg";

import slider from "../css/slider.css";

const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
   
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src={otto1} className="d-block w-100" alt="..." />
          <div className="carousel-caption carru">
            <div>
              <h2 className="titulo h2Slider">
                <strong>
                FOTOGRAFIA DE MASCOTAS
                </strong>
               </h2>
            </div>
            <div>
              <button className="btn btnS btn2">
                <h4 className="titulo2">Reserva tu sesión</h4>
              </button>
            </div>
            <div>
              <button className="btn btn3">
                <h6>Quiero saber más</h6>
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="3000">
          <img src={blanca3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block carru">
            <div>
              <h2 className="titulo h2Slider">
                <strong>FOTOGRAFIA DE MASCOTAS</strong>
                </h2>
            </div>
            <div>
              <button className="btn btn2 btnS ">
                <h4 className="titulo2">Reserva tu sesión</h4>
              </button>
            </div>
            <div>
              <button className="btn btn3">
                <h6>Quiero saber más</h6>
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="3000">
          <img src={slider6} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block  carru ">
            <div>
              <h2 className="titulo h2Slider">
                <strong>
                FOTOGRAFIA DE MASCOTAS
                </strong>
                </h2>
            </div>
            <div>
              <button className="btn btn2 btnS">
                <h4 className="titulo2">Reserva tu sesión</h4>
              </button>
            </div>
            <div>
              <button className="btn btn3">
                <h6>Quiero saber más</h6>
              </button>
            </div>
          </div>
        </div>
    
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;