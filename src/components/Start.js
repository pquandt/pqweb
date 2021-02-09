import React from "react";
import "./Start.css";
import TimeOfDay from "./Greeting";

function Start() {
  return (
    <div>
      <div>
        <h1 className="name"> Patrick Quandt</h1>
      </div>
      <div>
        <p>{TimeOfDay()}. Willkommen auf meiner persönlichen Homepage.</p>
      </div>
    </div>
  );
}

export default Start;
