import React from "react";
import phone from "../img/phone.png";
import moonport from "../img/moonsite.png";

export default function Projects() {
  return (
    <section id="projectssection">
      <div className="projects">
        <div>
          <h1>Projects</h1>
        </div>
        <div className="projects-wrapper-site">
          <div className="projects-phone">
            <img src={moonport} alt="img" className="projects-img" />
          </div>
          <div className="projects-text">
            <a href="https://moonportapp.com" target="_blank" rel="noreferrer">
              <h2>Moonport Website</h2>
            </a>
            <span>
              Simple advertising Homepage for a Crypto-Project.
              <ul>
                <li>- ReactJS</li>
                <li>- Sass</li>
                <li>- Javascript</li>
                <li>- Typescript</li>
              </ul>
            </span>
          </div>
          <div className="vLine"></div>
        </div>

        <div className="projects-wrapper-phone">
          <div className="vLine"></div>

          <div className="projects-text">
            <h2>Moonport App</h2>
            <p>
              A mobile app for making calculations with your crypto-portfolio.
              <span>
                <ul>
                  <li>- React-Native</li>
                  <li>- Javascript</li>
                  <li>- Typescript</li>
                  <li>- in early development-phase</li>
                </ul>
              </span>
            </p>
          </div>
          <div className="phoneimg">
            <img src={phone} alt="img" className="projects-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
