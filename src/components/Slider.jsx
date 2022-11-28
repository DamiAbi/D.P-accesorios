import React from "react";
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";
import f from "../assets/f.jpg";
6
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
          <img src={d} className="d-block w-100" alt="..." />
          <div className="carousel-caption carru">
            
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="3000">
          <img src={e} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block carru">
            
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="3000">
          <img src={f} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block  carru ">
            
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