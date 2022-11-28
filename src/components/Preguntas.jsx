import React from "react";
import a from "../assets/a.jpg";
import preguntas from "../css/preguntas.css";

const Preguntas = () => {
  return (
    <>
      <div className="card cardPr">
        <div className="card-body">
          <h1 className="tituloEx">¿Cómo trabajo?</h1>
          <img src={a} className="card-img-bottom imgPreguntas" alt="..." />
          <p className="card-text">
            <p className="text-dark">
            ¿Cuál es el costo de envío?
            </p>
            <p>
            El costo de envío será mostrado 
            en base al total de la compra y código postal, en el checkout, en el momento previo a la compra.
            </p>
            <p className="text-dark">¿Dónde puedo recibir mi pedido?</p>
            <p>
            Realizamos envíos a t
            odo el país por mensajeria en caba, 
            oca o correo argentino a domicilio o sucursal en el resto del pais y al exterior a traves de correo argentino a domicilio.
            </p>
           
            <p className="text-dark">
              ¿Cuánto demoras en entregarme el trabajo?
            </p>
            <p>El tiempo de entrega dependerá del tipo de envío seleccionado. En general la demora se encuentra entre 3 y 
              7 días hábiles luego de acreditado el pago en Argentina y hasta 30 dias habiles en paises extranjeros.</p>
            <p className="text-dark">¿Qué hago si llega en mal estado?</p>
            <p>
            Ponete en contacto con nosotras  dentro de las 72 horas recibida la compra y te enviaremos uno nuevo.

El cliente podra cancelar una compra siempre y cuando la misma no haya sido despachada. Para esto deberá ponerse en contacto con MTO a traves de cualquier red social lo antes posible. La devolución del importe 
sera mediante el medio de pago utilizado y tendrá el dinero disponible dentro de las 72 horas hábiles.
            </p>
          
            <p className="text-dark">¿Cómo puedo pagar?</p>
            <p>
              se requiere una seña del 50% para reservar día y hora, y el resto
              se entrega el mismo día de la sesión en su totalidad. La forma de
              pago por ahora es en efectivo.
            </p>
            <span className="text-dark">
              Dejános tus consultas en contactos o por el botón de whatsapp 📩
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Preguntas;
