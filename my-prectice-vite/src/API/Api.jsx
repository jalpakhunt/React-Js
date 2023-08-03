import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";

export default function Api() {
  let [data, setData] = useState([]);


  function callApi() {
    axios({
      method:"get",
      url: "https://jsonplaceholder.typicode.com/users"
    })
    .then((res) => {
      setData(res.data);
    })
    .catch((e) => {
      alert(e.message);
      
    });
    
    
  }
  return (
    <>
      <Button onClick={() => callApi()} variant="primary">
        Call Api
      </Button>

      {data.length > 0 ? (
        <Table className="  mt-4" striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Zipcode</th>
              <th>Lat</th>
              <th>Lng</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.address.city}</td>
                <td>{e.address.zipcode}</td>
                <td>{e.address.geo.lat}</td>
                <td>{e.address.geo.lng}</td>
                <td>{e.company.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </>
  )
}
