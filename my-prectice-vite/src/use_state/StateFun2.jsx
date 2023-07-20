import React, { useState } from 'react'

export default function StateFun2() {
    let [count,setCount] =useState(0);

    function handler(params) {
        console.log(count);
        setCount(Math.floor(Math.random()*200))
        
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>handler()}>Click me!</button>
    </div>
  )
}
