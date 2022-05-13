import "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
//import { useUser } from "./hooks/useUser";
// image
import logo from "./images/smallLogo.png";
import Avtar from "./images/default.jpg";
// Styles
import "./Navbar.css";

const Navbar = ({ LoggedIn, setLoggedIn }) => {
  //const { changeState } = useUser();

  return (
    <nav className="navbar d-flex navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand me-1" href="/">
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
          <ul className="navbar-nav mt-2 mt-lg-0 d-flex ">
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
            <li className="nav-item">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
          </ul>
        </div>

        { LoggedIn ?
          <a className="navbar-brand me-2" href="/Profile">
            <img
              src={Avtar}
              height="60"
              width="65"
              alt="Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>:<div></div>
        }


        <div className="d-flex align-items-center">
          {LoggedIn ? (
            <Link to="/">
              <button
                type="button"
                onClick={() => setLoggedIn(false)}
                className="btn btn-primary px-3 me-2"
              >
                Logout
              </button>
            </Link>
          ) : (
            <Link to="/auth">
              <button type="button" className="btn btn-primary px-3 me-2">
                Login | Register
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
