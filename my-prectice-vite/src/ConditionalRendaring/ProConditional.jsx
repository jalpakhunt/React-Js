import React, { useState } from "react";

export default function ProConditional() {
//   let [flag, setFlag] = useState(0);

  return (
    <div>
      <div
        className="navbar"
        style={{
          backgroundColor: "pink",
          color: "black",
          float: "left",
        //   width: 100
          height: 100,
          overflow:"hidden",
          margin:20,
          padding:20,
          display:"flex",
          textAlign:"center",
        //   textDecoration:none
          
          
        }}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contect">Contect</a>
        <a href="#features">Features</a>
      </div>
    </div>
  );
}
