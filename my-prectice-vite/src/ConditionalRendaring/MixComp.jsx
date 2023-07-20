import React, { useState } from "react";
import EmailComp from "./EmailComp";
import NumberComp from "./NumberComp";

export default function MixComp() {
  let [showemail, setEmail] = useState(false);
  let [shownumber, setNumber] = useState(false);

  function handelEmail(params) {
    setEmail(true);
    setNumber(false);
  }
  function handelNumber(params) {
    setNumber(true);
    setEmail(false);
  }
  return (
    <div>
      <button
        onClick={() => {
          handelEmail();
        }}
      >
        Email Click
      </button>
      <button
        onClick={() => {
          handelNumber();
        }}
      >
        Number Click
      </button>

      {showemail ? <EmailComp /> : <NumberComp />}
      
    </div>
  );
}
