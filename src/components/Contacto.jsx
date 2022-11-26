import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import login from "../css/contacto.css";

// npm i @emailjs/browser

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w5b2q8p",
        "template_p4th3sl",
        form.current,
        "VZCDTgZoOTA3lePFn"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact container py-5">
      <div className="row">
        <div className="col-lg-12 mx-auto ">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="colC-lg-12">
                  <div className="headC text-center text-white py-3">
                    <h3>Contactanos</h3>
                  </div>
                </div>
              </div>

              <form className="form py-3" ref={form} onSubmit={sendEmail}>
                <div className="form-row my-4">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="user_name"
                      className="effect-1  is-valid "
                      placeholder="Ingrese su nombre"
                      id="username"
                      required
                      pattern="[a-zA-Z0-9]+"
                      minlength="2"
                      maxlength="20"
                    />

                    <span className="Focus-border"></span>
                  </div>
                </div>
                <div className="form-row pb-4 ">
                  <div className="col-lg-12 ">
                    <input
                      type="email"
                      name="user_email"
                      className="effect-1 "
                      placeholder="Ingrese su correo electrónico"
                      pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                      maxlength="30"
                      required
                    />

                    <span className="Focus-border"></span>
                  </div>
                </div>
                <div className="form-row pt-2">
                  <div className="col-lg-12">
                    <textarea
                      rows="5"
                      name="message"
                      className="effect-1 "
                      placeholder="Ingrese su mensaje"
                      required
                      maxlength="400"
                      role
                      minlength="2"
                    />
                    <span className="Focus-border"></span>;
                  </div>
                </div>
                <div className="form-row pt-4 ">
                  <div className="offset-4 col-lg-12">
                    <p>
                      <input type="checkbox" required />
                      No soy un robot
                    </p>
                  </div>
                </div>
                <div className="offset-4 col-lg-12">
                  <input type="submit" value="Enviar" className="btn1" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
