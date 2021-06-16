import React from "react";
import moonport from "../img/moon.png";

// STILL ABOUT PAGE

export default function Projects() {
  return (
    <div>
      <section className="projects">
        <div>
          <h1>Projects</h1>
        </div>
        <div className="projects-wrapper">
          <div className="vLine">3</div>

          <div className="projects-text">
            <h2>Moonport App</h2>
            <p>
              A dezentralized mobile app for making calculations with your
              portfolio.
              <ul>
                <li>- react-native</li>
                <li>- firebase backend</li>
                <li>- work in progress</li>
              </ul>
            </p>
          </div>
          <div>
            <img src={moonport} alt="img" className="projects-img" />
          </div>
        </div>
      </section>
    </div>
  );
}
