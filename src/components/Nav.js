import React from "react";
import logo from "../img/pqlogo.svg";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/"></NavLink>
          <NavLink exact to="about" activeClassName="link-active">
            <li>About</li>
          </NavLink>
          <NavLink to="projects" activeClassName="link-active">
            <li>Project</li>
          </NavLink>{" "}
          <NavLink to="contact" activeClassName="link-active">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
