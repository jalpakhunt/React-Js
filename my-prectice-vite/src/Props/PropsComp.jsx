import React from "react";

export default function PropsComp(props) {
  return (
    <div className="crad">
      <img className="cardImg" src={props.img} alt={"Products"} />
      <h4>Price : {props.price}</h4>
      <h4>Product : {props.name}</h4>
      <p>Details : {props.description}</p>
    </div>
  );
}
