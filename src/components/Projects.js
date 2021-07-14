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
          <div>
            <img src={moonport} alt="img" className="projects-img" />
          </div>
          <div className="projects-text">
            <h2>Moonport Website</h2>
            <span>
              Simple homepage with roadmap and links to the moonport app.
              <ul>
                <li>- html</li>
                <li>- css</li>
                <li>- javascript</li>
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
              A dezentralized mobile app for making calculations with your
              portfolio.
              <span>
                <li>- react-native</li>
                <li>- firebase backend</li>
                <li>- work in progress</li>
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
