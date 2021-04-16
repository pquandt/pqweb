import React from "react";
import skillpic from "../img/programming-amico-1.svg";

// STILL ABOUT PAGE

export default function Skills() {
  return (
    <div className="skills">
      <div>
        <h1>My Skills</h1>
      </div>

      <div className="skills-wrapper">
        <div className="skills-text">
          <dl>
            <dt>Frontend Developement</dt>
            <dd>html, css, scss, javascript, reactjs, react-native</dd>
          </dl>
          <dl>
            <dt>Fast</dt>
            <dd>Reduce loading times to a minimum</dd>

            <dt>Responsive</dt>
            <dd>My projects look perfect on any device</dd>

            <dt>UI 1:1</dt>
            <dd>I stick exactly to your design</dd>

            <dt>Dynamic</dt>
            <dd>Today a website has to breath, feel organic</dd>
          </dl>
        </div>
        <div className="skill-img">
          <img src={skillpic} alt="img" className="skills-img" />
        </div>
      </div>
    </div>
  );
}
