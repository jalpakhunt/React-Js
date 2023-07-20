import React, { useState } from 'react'

export default function ProjectColor() {
    let [color,setColor] = useState("red");

    let [flag,setFlag] = useState(true);


 function FunColor(){
    let c1 ="red"
    let c2= "green"
      setColor(flag ? c1:c2) 
      setFlag(!flag) 
    }

  return (
    <div>
    <h1 style={{color:color}}>jalpa</h1>
    <button onClick={()=>{FunColor()}}>Change Color</button>
      
    </div>
  )
}
// ======================================>==============================>


// export default function ProjectColor() {
//     let [color,setColor] = useState("red");


//  function FunColor(){
//         setColor("green");
//     }

//   return (
//     <div>
//     <h1 style={{color:color}}>jalpa</h1>
//     <button onClick={()=>{FunColor()}}>Change Color</button>
      
//     </div>
//   )
// }
