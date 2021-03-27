import React from "react";
// import skilltree from "./Skilltrees"


function Card(props) {



const listItems = props.skill.map((item) =>  <li>{item}</li>);

  return (
    <div className="card">
      <h2 className="card-Headline">{props.name}</h2>
    
      <ul className="card-list">
          {listItems}
      </ul>
    </div>
  );
}

export default Card;
