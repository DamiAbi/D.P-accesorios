import React from "react";
import Slider from "../components/Slider";
import Presentacion from "../components/Presentacion";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Preguntas from "../components/Preguntas";
import Paquetes from "../pages/Paquetes";

import Experiencias from "../components/Experiencias";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <Slider />
 
 
      <section id="Presentacion">
        <Presentacion />
      </section>
      <section id="PaquetesLink">

      <Paquetes />
      <br />
      </section>
      

      <section id="Experiencias">
        <Experiencias />
      </section>
     

      
      <section id="preguntas" >
        <Preguntas />
      </section>
      <section id="Contacto">
      <br />
      <br />
      <Contacto />
      <br />
      </section>
     
     
     

      <a
        href=" https://api.whatsapp.com/send?phone=543816461812"
        class="whatsapp"
        target="_blank"
      >
        {" "}
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <br />
      <br />

      <Footer />
    </>
  );
};

export default Home;
