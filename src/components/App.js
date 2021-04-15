import React from "react";
import Nav from "./Nav";
import About from "./About";

function Start() {
  return (
    <div className="container">
      <div id="navcontent">
        <Nav />
      </div>

      <div id="aboutcontent">
        <About />
      </div>
    </div>
  );
}

export default Start;
