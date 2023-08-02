import React, { useState } from 'react'
import "./Input.css"
export default function InputAddAddress() {

    let [inaddress,setInAddress] =useState("");
    let [inadd,setInAdd] = useState([])

    function handelOnChange(e) {
        setInAddress (e.target.value)
        
    }
    function handelOnClick () {
        setInAdd([...inadd,inaddress])
        setInAddress("B-92,Glorina valley")
        
    }

  return (
    <div>
      <label htmlFor="address">Address:</label>
      <input type="text" name="address" id="address" value={inaddress} onChange={handelOnChange} />
      <button onClick={()=>{handelOnClick()}}>Add Address</button>

      <div>
        {
            inadd.map((e,i)=>{
                return <h1 key={i}>{e}</h1>
            })
        }
      </div>
    </div>
  )
}
