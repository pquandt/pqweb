import React from "react";
// import TimeOfDay from "./Greeting";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src="img/pqlogo.svg" alt="Logo" />
      </div>
      <div className="nav-logo-subtext">
        Patrick Quandt <br />
        Frontend Developer
      </div>

      <nav className="nav-bar">
        <ul className="nav-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
