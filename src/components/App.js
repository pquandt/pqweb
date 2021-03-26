import React from "react";
// import Navi from "./Navi";
import { Route, Switch } from "react-router-dom";
import Test from "./Test";
import { Container } from "react-bootstrap";
import Home from "./Home"

function Start() {
  return (
    <Container>
      {/* <Navi /> */}
      <Switch>
        <Route path="/Test">
          <Test />
        </Route>

        <Route path="/">
         <Home />
        </Route>

      </Switch>
    </Container>
  );
}

export default Start;
