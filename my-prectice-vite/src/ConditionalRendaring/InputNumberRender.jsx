import React, { useState } from "react";

export default function InputNumberRender() {
  let [number, setNumber] = useState(false);
  function OnNumber() {
    setNumber(true);
  }

  return (
    <div>
      <button
        onClick={() => {
          OnNumber();
        }}
      >
        Enter the Number
      </button>
      {number ? <input type="number" placeholder="Type The Number" /> : null}
    </div>
  );
}
