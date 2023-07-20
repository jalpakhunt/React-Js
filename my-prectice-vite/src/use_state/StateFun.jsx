import React, { useState } from "react";

export default function StateFun() {

    let [change,setChange] = useState(2);

    function onChange(params) {
        // console.log("---->",change);
        setChange(change * 2);
        
    }
  
  

  return (
    <div>
     <h1>{change}</h1>
     <button onClick={()=>onChange()}>Click me!</button>
    </div>
  );
}
