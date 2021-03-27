import React from "react";
import Card from "./Card";
import skilldata from "./Skilldata"

function createCard(skilldata){
 
  return(

<div className="col-1-of-3">
  <Card key={skilldata.id} 
  name={skilldata.skillName} 
  skill={skilldata.skill} />
  </div>
);
}

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>

      <div className="row">
        
        {skilldata.map(createCard)}
  
        
      </div>
    </div>
  );
}
