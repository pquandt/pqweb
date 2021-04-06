import React from "react";
import Nav from "./Nav";
import About from "./About";

function Start() {
  return (
    <div className="row">
      <div className="column-left">
        <Nav />
      </div>
      <div className="column-right">
       
          <About />
        
      </div>
    </div>
  );
}

export default Start;
