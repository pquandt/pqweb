import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

import gsap from "gsap";

export default function AllPages() {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
