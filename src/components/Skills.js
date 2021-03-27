import React from "react";
import Card from "./Card";
import skilltree from "./Skilltrees"

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>

      <div className="row">
        <div className="col-1-of-3">
     <Card name={skilltree[0].skillName} />
        </div>
        <div className="col-1-of-3">
        <Card name={skilltree[1].skillName} />
        </div>
        <div className="col-1-of-3">
        <Card name={skilltree[2].skillName} />
        </div>
  
        
      </div>
    </div>
  );
}
