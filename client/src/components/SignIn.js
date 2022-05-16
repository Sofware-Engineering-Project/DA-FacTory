import React from "react";
import { useState } from "react";
import axios from "axios";

const SignIn = () => {

  const [User, setUser] = useState({
    email: "",
    password: "",
    profession: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...User,
      [name]: value
    })
    //console.log(name,value);
  };

  const login = () => {
    axios.post("http://localhost:5000/DA-Factory/login",User).then(res => {
      alert(res.data.message);
      if(res.data.message==="Login Successfull"){
        localStorage.setItem('LoggedIn',JSON.stringify(true));//setLoggedIn(true);
        window.location.href = "http://localhost:3000";
      }
      console.log("SignIn: ",JSON.parse(localStorage.getItem('LoggedIn')));
      //window.history.href("http://localhost:3000");
  });
}

  return (
    <div className="col-xl-10">
      <div className="card-body p-md-5 text-black">
        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
          <h6 className="mb-0 me-4">Profession: </h6>

          <div className="form-check form-check-inline mb-0 me-4">
            <input
              className="form-check-input"
              type="radio"
              onChange={handleChange}
              name="profession"
              value="Student"
            />
            <label className="form-check-label" htmlFor="Student">
              Student
            </label>
          </div>
          <div className="form-check form-check-inline mb-0 me-4">
            <input
              className="form-check-input"
              type="radio"
              onChange={handleChange}
              name="profession"
              value="Faculty"
            />
            <label className="form-check-label" htmlFor="Faculty">
              Faculty
            </label>
          </div>
          <div className="form-check form-check-inline mb-0 me-4">
            <input
              className="form-check-input"
              type="radio"
              onChange={handleChange}
              name="profession"
              value="Admin"
            />
            <label className="form-check-label" htmlFor="Admin">
              Admin
            </label>
          </div>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            onChange={handleChange}
            value={User.email}
            name="email"
            className="form-control "
          />
          <label className="form-label" htmlFor="email">
            Email ID
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={User.password}
            className="form-control "
          />
          <label className="form-label" htmlFor="password">
            Password
          </label>
        </div>

        <div className="form-outline mb-4 d-flex justify-content-end">
          <a href="/">Forgot password ?</a>
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="button"
            onClick={login}
            className="btn btn-warning ms-2"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
