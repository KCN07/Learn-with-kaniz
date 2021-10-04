import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-2">
        <div className="container">
          <NavLink to="/home" style={{fontWeight:"bolder", fontSize:"30px" }} className="navbar-brand">
            Learn With Kaniz
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "blue",
                  }}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginRight: "10px",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Courses"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "blue",
                  }}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginRight: "10px",
                  }}
                >
                  Courses
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "blue",
                  }}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginRight: "10px",
                  }}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "blue",
                  }}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginRight: "10px",
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
