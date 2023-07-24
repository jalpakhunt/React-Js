import React, { useState } from 'react'

export default function InputAddNumbers() {

    let [number, setNumbers]  = useState("")
    let [addnum, setAddNum]   = useState([])

   function handelOnNumbers(e){
    setNumbers(e.target.value)

    }
    function handelAddNumbers() {
        setAddNum([...addnum,number])
        setNumbers("8140044565")
        
    }
  return (
    <div>
      <label htmlFor="numbers">Numbers:</label>
      <input type="numbers" id='numbers' value={number} onChange={handelOnNumbers} />
      <button onClick={()=>{handelAddNumbers()}}>Add Numbers</button>


      <div>
        {
            addnum.map((e,i)=>{
                return <h1 key={i}>{e}</h1>
            })
        }
      </div>
    </div>
  )
}
