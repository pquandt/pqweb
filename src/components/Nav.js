import React from "react";
import logo from "../img/pqlogo.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-logo-subtext">
        Patrick Quandt <br />
        Frontend Developer
      </div>

      <nav className="nav-bar">
        <ul className="nav-list">
          <Link to="/">
            <li>About</li>
          </Link>
          <Link to="projects">
            <li>Projects</li>
          </Link>
          <Link to="contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
