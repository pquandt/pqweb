import React from "react";
// import Navi from "./Navi";
import { Route, Switch } from "react-router-dom";
import Test from "./Test";
import { Container } from "react-bootstrap";
import Header from "./Header"

function Start() {
  return (
    <Container>
 
      <Switch>
        <Route path="/Test">
          <Test />
        </Route>

        <Route path="/">
         <Header />
        </Route>

      </Switch>
    </Container>
  );
}

export default Start;
