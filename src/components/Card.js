import React from "react";


function Card(props) {
  return (
    <div className="card">
      <h2 className="card-Headline">{props.name}</h2>
    
      <ul className="card-list">
        <li>{props.skill}</li>
      
      </ul>
    </div>
  );
}

export default Card;
