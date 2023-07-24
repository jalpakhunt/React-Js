import React, { useState } from 'react'

export default function TodoItems() {
    let [task,deletTask] = useState('')

    function handelDelet(params) {
        deletTask('')
        
    }
  return (
    <div>
    <span>{task}</span>
    <button onClick={()=>{handelDelet()}}>Delet</button>
      
    </div>
  )
}
