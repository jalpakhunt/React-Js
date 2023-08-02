import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
// import "./up.css"

export default function Update() {
  let [data, setData] = useState("");
  let [arr, setArr] = useState([]);
  let [newone,setNew] = useState("true")
  let [ind,setInd] = useState(null)

  function getData(e) {
    setData(e.target.value);
  }
  function addName() {
    setArr([...arr, data]);
    setData("");
  }

  function updateData() {
    arr.splice(ind, 1, name);
    setArr([...arr]);
    setData("");
    setNew(true);
  
    
  }
  function handleDelete() {
    arr.splice(0, 1);
    setArr([...arr]);
  }

  function handleUpdate(index,datas) {
    setData(datas)
    setNew(false)
    setInd(index)
    
  }
  return (
    <div>
      <Form className="border border-dark p-4 rounded mb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={data}
            placeholder="Enter Name"
            onChange={(e) => getData(e)}
          />
        </Form.Group>
        {newone? (

       
        <Button onClick={() => addName()} variant="success">
          Add
        </Button> ):(
        <Button onClick={() => updateData()} variant="primary">
            Update
          </Button>)}
      </Form>
      <>
      {arr.length>0 ?(

      
        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e}</td>
                  <td>
                  {/* ====Delete button */}
                    <Button onClick={() => handleDelete()} variant="danger">
                      Delete
                    </Button>
                    {/* ====update button */}
                    <Button
                      onClick={() => handleUpdate(i, e)}
                      className="ms-4"
                      variant="primary"
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        ) :<h1>Data table is not found....</h1>}
      </>
    </div>
  );
}
