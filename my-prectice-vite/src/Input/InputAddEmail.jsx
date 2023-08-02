import React, { useState } from 'react'
import "./Input.css"
export default function InputAddComp() {
    let [user,setUser] = useState("")
    let [add,setAdd]   =useState([])
    function handelOnEmail(e) {
      setUser(e.target.value)
      
    }

    function handelSubmit() {
      setAdd([...add,user])
      setUser("khuntjalpa13@gmail.com")
    }
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={user} onChange={handelOnEmail}/>
      <button onClick={()=>{(handelSubmit())}}>Send Email</button>

      <div>
       {
        add.map((e,i)=>{
          return <h1 key={i}>{e}</h1>
        })
       }
      </div>
    </div>
  )
}
