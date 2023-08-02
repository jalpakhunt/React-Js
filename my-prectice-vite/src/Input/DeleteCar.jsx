import React, { useState } from "react";
import { Table } from "react-bootstrap";
export default function DeleteCar() {
  let [data,setData] =useState({name:"",number:""});
  let [arr, setArr] = useState([]);

  function getData(e) {
    setData({...data,[e.target.name]: e.target.value});
    
  }

  function handelSubmit() {
    setArr([...arr, data]);
    setData({ name: "", number: "" });
  }

  function handelDelete() {
    arr.splice(0,1)
    setArr([...arr])
    
  }

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={(e) => getData(e)}
      />

      <label htmlFor="number">Number:</label>
      <input
        type="number"
        name="number"
        value={data.number}
        onChange={(e) => getData(e)}
      />
      <button onClick={() => handelSubmit()}>Submit</button>
      <>
      <Table>
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Number</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {arr.map((e,i)=>{
            return <tr key={i}>
            <td>{i+1}</td>
                <td>{e.name}</td>
                <td>{e.number}</td>
                <td><button onClick={()=>handelDelete()}>Delete</button></td>
            </tr>
                
            
        })}

        </tbody>
      </Table>
        
      </>
    </div>
  );
}
