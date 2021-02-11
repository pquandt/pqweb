import React from "react";
import "./App.css";
import TimeOfDay from "./Greeting";
import Navi from "./Navi";
import { Route, Switch } from "react-router-dom";
import Test from "./Test";
import { Container } from "react-bootstrap";

function Start() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/Test">
          <Test />
        </Route>

        <Route path="/">
          <div className="startTop">
            <div>
              <h1 className="name"> Patrick Quandt</h1>
            </div>
            <div>
              <p>{TimeOfDay()} Willkommen auf meiner persönlichen Homepage.</p>
            </div>
          </div>
        </Route>
      </Switch>
    </Container>
  );
}

export default Start;
