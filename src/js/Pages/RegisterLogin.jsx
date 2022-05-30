// react utils
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/Context";

// assets
import "../../assets/css/register.css";
import notesImg from "../../assets/img/notes.png";

const RegisterLogin = () => {
  const {store, actions} = useContext(Context)
  // is the user loggin in instead? if true will render page as login.
  const[isLogin, setIsLogin] = useState(true);

  const [regFormValues, setRegFormValues] = useState({});

  // handleInput function for the controlled inputs
  const handleInput = (e) => {
    setRegFormValues({...regFormValues,[e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) actions.login(regFormValues)
  }
  return (
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
                    <div className="form">
                      <form className="px-sm-5">
                        <div>
                          <label className="form-label" htmlFor="username"></label>
                          <input
                            className="form-control"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            onChange={(e) => handleInput(e)}
                            value={regFormValues['username']}
                          />
                        </div>
                        <div>
                          <label className="form-label" htmlFor="password"></label>
                          <input
                            className="form-control"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={regFormValues['password']}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                        <div className={`${isLogin ? 'd-none': 'd-block'}`}>
                          <label className="form-label" htmlFor="email"></label>
                          <input
                            className="form-control"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="hello@world.com"
                            value={regFormValues['email']}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                        <button className="btn btn-primary btn-sm mb-3 isLogin-toggle mt-3" onClick={(e)=> {
                          e.preventDefault();
                          !isLogin ? setIsLogin(true) : setIsLogin(false)
                        }}>{!isLogin ? 'Already Registered?' : 'Need to register?'}</button>
                          <button className="btn btn-primary w-50" onClick={(e) => handleSubmit(e)}>
                            {isLogin ? 'Login' : 'Register'}
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
  );
};

export default RegisterLogin;
