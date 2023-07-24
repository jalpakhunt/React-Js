import React, { useState } from 'react'

export default function TodoForm() {
    let [form,setForm] = useState('')

    function handelForm(params) {
        setForm('')
    }
  return (
    <div>
      <form action="submit">
        <input type="text" value={form}  placeholder='Add a new task'/>
        <button onClick={()=>{handelForm()}}>SUBMIT</button>
      </form>
    </div>
  )
}
