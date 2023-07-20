import React, { useState } from 'react'

export default function ProjectArr() {

    let [index ,setIndex] = useState(0);
    let arr = ["red","white","blue","brown","pink"];

    function Fun() {
        index<arr.length ? setIndex(index+1):setIndex(0);
        console.log("🚀 ~ file: ProjectArr.jsx:10 ~ Fun ~ index:", index)
        
    }
  return (
    <div>
    <h1>arr index color is{arr[index]}</h1>
    <button onClick={()=>{Fun()}}>Index</button>
      
    </div>
  )
}
