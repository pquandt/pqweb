import React from "react";
import Nav from "./Nav";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Start() {
  return (
    <div>
      <div id="navcontent">
        <Nav />
      </div>

      <div className="container">
        <div className="left-col"></div>

        <div id="aboutcontent">
          <About />
        </div>
        <div id="skillcontent">
          <Skills />
        </div>
        <div id="projectcontent">
          <Projects />
        </div>
        <div id="contactcontent">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Start;
