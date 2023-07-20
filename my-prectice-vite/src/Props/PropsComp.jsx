import React from "react";

export default function PropsComp(props) {
  return (
    <div>
    
      <img src={props.img} alt={"Products"}/>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <h4>{props.price}</h4>
     

    </div>
  );
}
