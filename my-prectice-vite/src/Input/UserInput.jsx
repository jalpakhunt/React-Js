import React, { useState } from 'react'
import { ButtonToolbar, Table } from "react-bootstrap";
export default function UserInput() {
    let [user,setUser] = useState("")
    let [arr,setArr] = useState([])

    function handelClick(){

        setArr([...arr,user])
        setUser("")
    }
    function handelDelete() {
        arr.splice(0,1)
        setArr([...arr])
        
    }


  return (
    <div>
    <label htmlFor="name">Name:</label>
    <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/>
    <button onClick={()=>{handelClick()}}>Add</button>
    <>
    {arr.length>0 ?(

    
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Contect No</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {
                    arr.map((ele,i)=>{
                        return (<tr key={i}>
                        <td>{ele}</td>
                        <td>{23}</td>
                        <td>{"khuntjalpa13@gmail.com"}</td>
                        <td>{"Surat"}</td>
                        <td>{8140044565}</td>
                        <td><button onClick={()=>handelDelete()}>Delete</button></td>


                        </tr>
                    )})
                }
            </tbody>
        </Table>
        ):null}
    </>
      
    </div>
  )
}
