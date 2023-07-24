import React, { useState } from 'react'

export default function FormProject1() {
    let [form,setDataForm] = useState("")
  return (
    <div>
      <form action="{submit}">
        <div>
            <label htmlFor="name">Name:</label>
                <input type="text" id='name'name ="name"value={form.name}/>
            
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' name='email' value={form.email} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

