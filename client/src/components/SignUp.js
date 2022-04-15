import React from "react";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const [User, setUser] = useState({
    email: "",
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    profession: "",
    contact: "",
    password: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...User,
      [name]: value
    })
    //console.log(name,value);
  };

  const register = () => {
    //const { email, contact } = User
    //console.log();
    /*if(/^\w+([.-]?\w+)*@daiict.ac.in$/.test(email)===false)
    {
      alert("invalid email...");
      console.log("invalid email");
    }
    else if(contact.match("[0-9]{10}")===null)
    {
      alert("invalid email...");
      console.log("invalid email");
    }
    else{*/
      axios.post("http://localhost:5000/register",User).then(res => alert(res.data.message));
    //}
  }
  return (
      <div className="card-body p-md-5 text-black">

        <div className="form-outline mb-4">
          <input
            type="email"
            name="email"
            //pattern="[a-z0-9_.]@daiict.ac.in"
            value={User.email}
            onChange={handleChange}
            className="form-control"
          />
          <label className="form-label" htmlFor="form3Example97">
            Email ID
          </label>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="form-outline">
              <input
                type="text"
                name="firstname"
                value={User.firstname}
                onChange={handleChange}
                className="form-control"
              />
              <label className="form-label" htmlFor="form3Example1m">
                First name
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="form-outline">
              <input
                type="text"
                name="middlename"
                value={User.middlename}
                onChange={handleChange}
                className="form-control "
              />
              <label className="form-label" htmlFor="form3Example1n">
                Middle name
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="form-outline">
              <input
                type="text"
                name="lastname"
                value={User.lastname}
                onChange={handleChange}
                className="form-control "
              />
              <label className="form-label" htmlFor="form3Example1n">
                Last name
              </label>
            </div>
          </div>
        </div>

        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
          <h6 className="mb-0 me-4">Gender: </h6>

          <div className="form-check form-check-inline mb-0 me-4">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              id="femaleGender"
            />
            <label className="form-check-label" htmlFor="femaleGender">
              Female
            </label>
          </div>

          <div className="form-check form-check-inline mb-0 me-4">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              id="maleGender"
            />
            <label className="form-check-label" htmlFor="maleGender">
              Male
            </label>
          </div>

          <div className="form-check form-check-inline mb-0">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="otherGender">
              Other
            </label>
          </div>
        </div>

        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
          <h6 className="mb-0 me-4">Profession: </h6>

          <div className="form-check form-check-inline mb-0 me-4">
            <input
              className="form-check-input"
              type="radio"
              name="profession"
              value="Student"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="Student">
              Student
            </label>
          </div>

          <div className="form-check form-check-inline mb-0 me-4">
            <input
              className="form-check-input"
              type="radio"
              name="profession"
              value="Faculty"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="Faculty">
              Faculty
            </label>
          </div>
        </div>

        <div className="form-outline mb-4">
          <input
            type="number"
            name="contact"
            value={User.contact}
            onChange={handleChange}
            className="form-control "
          />
          <label className="form-label" htmlFor="form3Example90">
            Contact No.
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            name="password"
            value={User.password}
            onChange={handleChange}
            className="form-control "
          />
          <label className="form-label" htmlFor="password">
            Password
          </label>
        </div>

        <div className="d-flex justify-content-center">
          <button type="button" onClick={register} className="btn btn-warning ms-2">
            Sign Up
          </button>
        </div>
      </div>
  );
};

export default SignUp;
