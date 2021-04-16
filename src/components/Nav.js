import React from "react";
import logo from "../img/pqlogo.svg";

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
          <li>
            <a href="#aboutcontent">About</a>
          </li>
          <li>
            <a href="#projectcontent">Projects</a>
          </li>
          <li>
            <a href="#contactcontent">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
