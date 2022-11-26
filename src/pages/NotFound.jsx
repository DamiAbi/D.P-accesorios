import React from "react";
import cuca from "../assets/cuca.jpg";
import notFound from "../css/notFound.css";

const NotFound = () => {
  return (
    <div class="card text-bg-dark">
      <img src={cuca} class="card-img" alt="404" />
      <div class="card-img-overlay">
        <div className="text4">
          <h1 className="text5">Oops... No pudimos encontrar la página</h1>
        </div>
        <div>
          <button className="btn btn3">
            <h3>volver</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
