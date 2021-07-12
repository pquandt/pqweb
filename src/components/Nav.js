import React from "react";
import logo from "../img/logo.svg";

function Nav() {
  return (
    <div className="navbox">
      <div className="nav">
        <div className="nav-left">
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav-logo-subtext">
            Patrick Quandt <br />
            Frontend Developer
          </div>
        </div>
        <div className="nav-right">
          <nav className="nav-bar">
            <a href="#aboutsection">About</a>
            <a href="#projectssection">Projects</a>
            <a href="#contactsection">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
