// react utils
import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/Context";

// assets
import "../../assets/css/register.css";
import notesImg from "../../assets/img/notes.png";

const RegisterLogin = () => {
  const { store, actions } = useContext(Context);

  // is the user loggin in instead? if true will render page as login.
  const [isLogin, setIsLogin] = useState(true);

  // used to display any errors during register/login
  const [error, setError] = useState("");

  const defaultFormValues = {
    username: "",
    password: "",
    email: ""
  }

  const [regFormValues, setRegFormValues] = useState(defaultFormValues);

  const navigate = useNavigate();

  // handleInput function for the controlled inputs
  const handleInput = (e) => {
    setError('')
    setRegFormValues({...regFormValues, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(regFormValues)
    if (isLogin) {
      // if isLogin we are going to login
      await actions.login(regFormValues);
      navigate("/");
    } else {
      //register
      /* 
        if reponse is not null (returned from the actions.register method), there 
        was an issue during registration and will display returned error response from api.
        For exaple: username already taken.
      */
      let response = await actions.register(regFormValues);
      if (response != null) setError(response)
      else {
        setRegFormValues(defaultFormValues);
        setIsLogin(true);
      }
    }
  };
  // return login/register page if there is no user info stored in localStorage
  return !localStorage.getItem("userID") ? (
    <>
      <section id="register">
        <div className="container-fluid p-0">
          <div className="reg-section-wrap">
            <div className="reg-content">
              <div className="row gx-0">
                <div className="col-12 col-md-6">
                  <div className="reg-content-left d-flex align-items-center justify-content-center">
                    <img src={notesImg} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="reg-content-right d-flex flex-column justify-content-center">
                    <h1 className="text-center">Not Another Note App</h1>
                    <small className="text-center mb-2">
                      A note app inspired by{" "}
                      <a href="https://simplenote.com/" target="_blank">
                        SimpleNote
                      </a>
                    </small>
                    <div class={`alert alert-danger ${error ? 'd-block' : 'd-none'}`} role="alert">
                      {error}
                    </div>
                    <div className="form">
                      <form className="px-sm-5">
                        <div>
                          <label
                            className="form-label"
                            htmlFor="username"
                          ></label>
                          <input
                            className="form-control"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            onChange={(e) => handleInput(e)}
                            value={regFormValues["username"]}
                          />
                        </div>
                        <div>
                          <label
                            className="form-label"
                            htmlFor="password"
                          ></label>
                          <input
                            className="form-control"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={regFormValues["password"]}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                        <div className={`${isLogin ? "d-none" : "d-block"}`}>
                          <label className="form-label" htmlFor="email"></label>
                          <input
                            className="form-control"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="hello@world.com"
                            value={regFormValues["email"]}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <button
                            className="btn btn-primary w-50 mt-3"
                            onClick={(e) => handleSubmit(e)}
                          >
                            {isLogin ? "Login" : "Register"}
                          </button>
                          <button
                            className="btn btn-primary btn-sm mb-3 isLogin-toggle mt-3"
                            onClick={(e) => {
                              e.preventDefault();
                              !isLogin ? setIsLogin(true) : setIsLogin(false);
                            }}
                          >
                            {!isLogin
                              ? "Already Registered?"
                              : "Need to register?"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default RegisterLogin;
