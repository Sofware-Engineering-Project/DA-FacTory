import "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
//import { useUser } from "./hooks/useUser";
// image
import logo from "./images/smallLogo.png";
// Styles
import "./Navbar.css";

const Navbar = () => {
  //const { changeState } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand me-2" href="/">
          <img
            src={logo}
            height="60"
            width="65"
            alt="Logo"
            loading="lazy"
            style={{ marginTop: "-1px" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mb-2 mb-lg-0 w-100">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/student">
                Student
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faculty">
                Faculty
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <Link to="/auth">
            <button type="button" className="btn btn-primary px-3 me-2">
              sign-in/sign-up
            </button>
          </Link>
          {/*<Link to="/auth" onClick={() => changeState(true)}>
              <button type="button" className="btn btn-primary me-3">
                Register
              </button>
  </Link>*/}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
