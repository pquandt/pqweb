import React from "react";
import Card from "./Card";
import skilldata from "./Skilldata"

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>

      <div className="row">
        <div className="col-1-of-3">
     <Card name={skilldata[0].skillName} skill={skilldata[0].skill} />
        </div>
        <div className="col-1-of-3">
        <Card name={skilldata[1].skillName} skill={skilldata[1].skill} />
        </div>
        <div className="col-1-of-3">
        <Card name={skilldata[2].skillName} skill={skilldata[2].skill} />
        </div>
  
        
      </div>
    </div>
  );
}
