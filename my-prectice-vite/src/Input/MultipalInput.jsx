import React, { useState } from "react";
import { Button ,Table} from "react-bootstrap";
import "./Multi.css"

export default function MultipalInput() {
  let [data, setData] = useState({
    name: "",
    email: "",
    Password: "",
    address: "",
    city: "",
    ContectNum: "",
  });
  let [arrData, setArrData] = useState([]);

  function getData(e) {
    setData({ ...data, [e.target.name]: e?.target?.value });
  }
  function handelSubmit() {
    setArrData([...arrData, data]);
    setData({
      name: "",
      email: "",
      Password: "",
      address: "",
      city: "",
      ContectNum: "",
    });
  }
  return (
    <>
      <div className="inputDiv">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name:"
          value={data.name}
          onChange={(e) => getData(e)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email:"
          value={data.email}
          onChange={(e) => getData(e)}
        />

        <label htmlFor="password">password:</label>
        <input
          type="number"
          name="Password"
          placeholder="Enter Password:"
          value={data.Password}
          onChange={(e) => getData(e)}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          placeholder="Enter Address:"
          value={data.address}
          onChange={(e) => getData(e)}
        />

        <label htmlFor="name">City:</label>
        <input
          type="text"
          name="city"
          placeholder="Enter City:"
          value={data.city}
          onChange={(e) => getData(e)}
        />

        <label htmlFor="ContectNum">ContactNum:</label>
        <input
          type="number"
          name="ContectNum"
          placeholder="Enter ContectNum:"
          value={data.ContectNum}
          onChange={(e) => getData(e)}
        />

        <Button
          onClick={() => {
            handelSubmit();
          }}
          className="mt-3 p-2"
          variant="secondary"
        >
          Submit
        </Button>
      </div>
      {arrData.length > 0 ? (
        <>
          <h1>Data Table</h1>
          <div className="inputTable">
          <Table className ="mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
                <th>City</th>
                <th>ContectNum</th>
              </tr>
            </thead>

            <tbody>
              {arrData.map((e, i) => (
                <tr key={i}>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.Password}</td>
                  <td>{e.address}</td>
                  <td>{e.city}</td>
                  <td>{e.ContectNum}</td>
                </tr>
              ))}
            </tbody>
            </Table>
          </div>
        </>
      ) : null}
    </>
  );
}
