import React from "react";
import skillpic from "../img/programming-amico-1.svg";

// STILL ABOUT PAGE

export default function Projects() {
  return (
    <section className="skills" id="projectcontent">
      <div>
        <h1>Projects</h1>
      </div>

      <div className="skills-text">
        <img src={skillpic} alt="img" className="skills-img" />
        <h2>Lorem Ipsum Projekt</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aperiam cum dolore beatae, voluptatum distinctio rerum, animi
          cupiditate et reiciendis sapiente iste. Laboriosam nostrum ab natus?
          Facilis libero optio aut?
        </p>
      </div>
    </section>
  );
}
