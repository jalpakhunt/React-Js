import React, { useState } from "react";

export default function PlayButton() {
  let [play, setPlay] = useState(false);

  function Fun() {
    setPlay(!play);
  }
  return (
    <div>
      <button
        onClick={() => {
          Fun();
        }}
      >
        How to Play
      </button>
      {play ? (
        <div>
          <p className="container">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            sapiente temporibus, similique iste laudantium ea mollitia quisquam,
            delectus ducimus nesciunt earum rem necessitatibus nostrum id
            aperiam, nemo corporis culpa ut.
          </p>
        </div>
      ) : null}
      
    </div>
  );
}
