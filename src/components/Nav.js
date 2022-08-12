import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen === false) {
      document.getElementById("navmobile-toggle").checked = false;
    }
  });

  return (
    <div className="navbox">
      <div className="nav">
        <div className="nav-left">
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav-logo-subtext">
            Patrick Quandt <br />
            Web-Developer
          </div>
        </div>
        <div className="nav-right">
          <nav className="nav-bar">
            <a href="#aboutsection">About</a>
            <a href="#projectssection">Projects</a>
            <a href="#contactsection">Contact</a>
          </nav>
        </div>
        <div className="navmobile">
          <input
            type="checkbox"
            className="navmobile-checkbox"
            id="navmobile-toggle"
            onClick={toggle}
          />
          <label htmlFor="navmobile-toggle" className="navmobile-button">
            <span className="navmobile-icon">&nbsp;</span>
          </label>
          <div className="navmobile-bg">&nbsp;</div>

          <nav className="navmobile-nav">
            <ul className="navmobile-list">
              <li className="navi-item">
                <a
                  href="#aboutsection"
                  className="navmobile-link"
                  onClick={toggle}
                >
                  About
                </a>
              </li>
              <li className="navi-item">
                <a
                  href="#projectssection"
                  className="navmobile-link"
                  onClick={toggle}
                >
                  Projects
                </a>
              </li>
              <li className="navi-item">
                <a
                  href="#contactsection"
                  className="navmobile-link"
                  onClick={toggle}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
