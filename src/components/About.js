import React from "react";
import avatar from "../img/patrick_business_1.jpg";

export default function About() {
  return (
    <div className="about">
      <div>
        <h1>Hello, I am Patrick Quandt and</h1>
        <span className="about-span">
          I am a <span className="about-blue-span">frontend developer</span>
        </span>
      </div>

      <div className="about-text-wrapper">
        <div className="about-text">
          <h2>Overall experience</h2>
          <p>
            Through my experience in the areas of video, audio and corporate
            identity, I have a broad understanding of media projects from which
            my customers benefit.
          </p>
        </div>

        <div className="landscape-img">
          <img src={avatar} alt="Patrick Quandt" />
        </div>
      </div>
    </div>
  );
}
