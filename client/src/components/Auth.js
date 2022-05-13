import React from "react";
import backgrd from "./images/student.jpg";
import "./Auth.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import { useState } from "react";

const Auth = ({LoggedIn, setLoggedIn}) => {
  const [NewUser, setNewUser] = useState(false);

  if (LoggedIn) return <Home />;
  else {
    return (
      <section className="h-100 bg-dark w-100">
        <div
          className="container py-5 d-flex justify-content-center"
          id="auth"
        >
          <div className="row d-flex justify-content-center align-items-center w-100">
            <div className="col">
              <div className="card card-registration mx-auto w-100">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src={backgrd}
                      alt="Student"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                        height: "700px",
                        width: "650px",
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <ul>
                      <li>
                        <button
                          className="btn border-dark rounded"
                          onClick={() => setNewUser(false)}
                        >
                          Login
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn border-dark rounded"
                          onClick={() => setNewUser(true)}
                        >
                          Register
                        </button>
                      </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                      {NewUser ? <SignUp /> : <SignIn LoggedIn={LoggedIn} setLoggedIn={setLoggedIn}/>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Auth;
