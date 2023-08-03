import React from "react";

export default function PropsImg(props) {
  return (
    <>
    {/* <div>
    <h1> Your title</h1>
    </div>
     */}
    <div className="card">
      <img className="cardImg" src={props.img} alt={"Products"} />
      <h4>Product : {props.name}</h4>
    </div>
    </>
  );
}
