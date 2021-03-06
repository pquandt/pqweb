import React from "react";
import avatar from "../img/patrick_business_1.jpg";

export default function About() {
  return (
    <section id="aboutsection">
      <div className="about">
        <div className="about-headline">
          <h1>Hello, I am Patrick Quandt and</h1>
          <span className="about-span">
            I am a <span className="about-blue-span">frontend developer</span>
          </span>
        </div>

        <div className="about-text-wrapper">
          <div className="vLine"></div>
          <div className="about-text">
            <h2>Overall experience</h2>

            <p className="linebreakSpan">
              <span className="linebreakSpan">
                Through my experience in the areas of video, audio and
              </span>
              corporate identity, I have a broad understanding of media
              <span className="linebreakSpan">
                projects from which my customers benefit.
              </span>
            </p>
          </div>
          <div className="about-img">
            <div className="about-img--side about-img--front">
              <img src={avatar} alt="Patrick Quandt" />
            </div>
            <div className="about-img--side about-img--back">
              <div className="about-text about-text-img">
                <h1>Gude!</h1>
                <p> aus Frankfurt am Main.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
