import React from "react";
import logo from "../img/pqlogo.png";

function Nav() {
  return (
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
        <div className="smicons">
          <a href="#mail">M</a>
          <a href="#in">L</a>
          <a href="#gi">Git</a>
        </div>
        <nav className="nav-bar">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
