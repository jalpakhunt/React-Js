import React from "react";

export default function PropsFun(props) {
  {
    console.log("----->", props);
  }
  return (
    <div>
      <h1>
        {props.id}
        {props.name}
        {props.age}
        {props.hobby}
      </h1>
    </div>
  );
}
