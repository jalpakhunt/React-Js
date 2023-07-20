import React, { useState } from "react";

export default function UseStateFun() {
  let [count, setCount] = useState(0);

  let x = 0;
  function Inc(params) {
    x++;
    console.log("🚀 ~ file: UseStateFun.jsx:9 ~ Inc ~ x:", x);
  }
  function incCount(params) {
    console.log("----->", count);
    setCount(count + 1);
  }

  return (
    <div>
      <h1 className="count">{x}</h1>
      <button onClick={() => Inc()}>Increment</button>

      <hr/>


      {/* ============================================usu state=========== */}

      <h1 className="count">{count}</h1>
      <button onClick={()=>incCount()}>Increment</button>
    </div>

    
  );
}
