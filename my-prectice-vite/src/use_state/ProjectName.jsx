import React, { useState } from 'react'

export default function ProjectName() {
    let [name1,setName] = useState("jalpa")
    let [flag,setFlag] = useState(true);

    function ClassFun(){
        let n1 ="jalpa"
        let n2 = "chinmai"
        setFlag(!flag)
        setName(flag? n1:n2)
        // setName("chinmai")
    }
  return (
    <div>
    <h1>{name1}</h1>
    <button onClick={()=>{ClassFun()}}>Name Change</button>
      
    </div>
  )
}
