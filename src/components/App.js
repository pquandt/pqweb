import React from "react";
import Nav from "./Nav";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Start() {
  return (
    <Router>
      <div id="navcontent">
        <Nav />
      </div>
      <div className="container">
        <div className="left-col"></div>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default Start;
