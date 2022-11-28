import React from "react";
import b from "../assets/b.jpg";
import presentacion from "../css/presentacion.css";

const Presentacion = () => {
  return (
    <>
      <div className="card cardPr">
        <div className="card-body" >
          <h5 className="card-title">Conoceme</h5>
          <p className="card-text">
            DP es resultado de mi búsqueda personal en el diseño de piezas que expresen quién soy, los valores que apoyo y busco transmitir. Todas las piezas son diseñadas, intervenidas y realizadas a mano por mí.

Siempre me sentí cerca de la naturaleza: de chica me gustaba pasar horas y horas afuera en el patio de casa, jugando con mis perros, rodeada de las plantas y flores de mi mamá, observando insectos y pájaros. De noche me gustaba acostarme en una reposera, taparme con una manta y ver las estrellas por horas mientras me perdía en el azul profundo del cielo- aún hoy hay días que me pasa. Cuando no estaba fuera, disfrutaba sentarme en el sillón a ver documentales y leer revistas sobre animales y todo aquello que tuviera que ver con la Tierra. Creo que somos parte de un todo y estamos todxs conectados,
 por lo que debemos vivir en armonía con el entorno que nos rodea
          </p>
         
        </div>
        <img src={b} className="card-img-bottom imgcardP" alt="..." />
      </div>
    </>
  );
};

export default Presentacion;
