import React, { useState } from 'react'

export default function InputComp() {
// ----------step-2-----------------------------------------
    let [Input,setInput] = useState("")

    function changeInput(e) {
        setInput(e.target.value)
    }

  return (
    <div>
     {/* ------- Step 3: Create the input element--------------- */}
      

      <label htmlFor="name">Name :</label>
      <input type="text" value={Input} onChange={changeInput}   />

      <button onClick={()=>{changeInput()}}>Change Value</button>

    </div>
  )
}
