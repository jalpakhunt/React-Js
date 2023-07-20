import React, { useState } from 'react'
// contional  ==> true/false argument
export default function ConditionalRen() {
let [flag, setFlag] = useState(true);

function render(){
    setFlag(!flag);
}

  return (
    <div>
    { flag?<h1>jalpa savalliya</h1>:

    <h2>Chinmai Savaliya</h2>}

    <button onClick={()=>{render()}}>Render</button>
      
    </div>
  )
}
