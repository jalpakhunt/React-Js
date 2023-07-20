import React, { useState } from "react";

export default function InputRender() {
  let [input, setInput] = useState(false);

  function OnEmail() {
    setInput(true);
    
  }

  return (
    <div>
      <button
        onClick={() => {
          OnEmail();
        }}
      >
        Click me!
      </button>
      {input ? <input type="Email" placeholder="Enter the Email" /> : null}
    </div>
  );
}
