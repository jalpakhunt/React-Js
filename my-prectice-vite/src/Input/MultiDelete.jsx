import React, { useState } from "react";
import {Button,Table} from "react-bootstrap";
import "./Delete.css"
export default function MultiDelete() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    city: "",
  });
  let [arr, setArr] = useState([]);

  function getData(e) {
    setUser({ ...user, [e.target.name]: e?.target?.value });
  }

  function handelSubmit() {
    setArr([...arr, user]);
    setUser({name: "",
    email: "",
    password: "",
    number: "",
    city: "",})
  }

  function handelDelete() {
    arr.splice(0,1)
    setArr([...arr])
    
    
  }
  return (
    <>
      <div className="delete">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            placeholder="Enter Name"
            onChange={(e) => getData(e)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            placeholder="Enter Email"
            onChange={(e) => getData(e)}
          />
        </div>
        <div>
          <label htmlFor="pw">PassWord:</label>
          <input
            type="number"
            name="password"
            id="pw"
            value={user.password}
            placeholder="Enter PassWord"
            onChange={(e) => getData(e)}
          />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <input
            type="number"
            name="number"
            id="number"
            value={user.number}
            placeholder="Enter Number"
            onChange={(e) => getData(e)}
          />
        </div>
        <div>
          <label htmlFor="city">Cities:</label>
          <input
            type="city"
            name="city"
            id="city"
            value={user.city}
            placeholder="Enter City"
            onChange={(e) => getData(e)}
          />
        </div>
        <Button  onClick={() => handelSubmit()} variant="success">Submit</Button>
        
        {arr.length > 0 ? (
          <div className="tables">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No.</th>
                  <th> Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Number</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {arr.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.password}</td>
                      <td>{e.number}</td>
                      <td>{e.city}</td>
                      <td><button className="width" onClick={()=>handelDelete(i)}>Delete</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        ) : null}
      </div>
    </>
  );
}
