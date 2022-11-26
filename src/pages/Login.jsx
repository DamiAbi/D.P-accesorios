import React from "react";
import login from "../css/login.css";

const Login = () => {
  return (
    <div className="login container py-5">
      <div className="row">
        <div className="col-lg-12 mx-auto ">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="colC-lg-12">
                  <div className="headC text-center text-white py-3">
                    <h3>Iniciar sesión</h3>
                  </div>
                </div>
              </div>

              <form className="form py-3">
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
                    <input
                      type="password"
                      name="message"
                      className="effect-1 "
                      placeholder="Ingrese su contraseña"
                      required
                      maxlength="20"
                      role
                      minlength="6"
                    />
                    <span className="Focus-border"></span>;
                  </div>
                </div>
                <div className="form-row pt-4 ">
                  <div className="col-lg-12">
                    <a href="" className="text">
                      <p>Registre su usuario aquí</p>
                    </a>
                  </div>
                </div>
                <div className="form-row  ">
                  <div className="col-lg-12">
                    <a href="" className="text">
                      <p>¿Olvidó su contraseña?</p>
                    </a>
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

export default Login;
