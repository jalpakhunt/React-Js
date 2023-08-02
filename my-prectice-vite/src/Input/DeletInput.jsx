import React, { useState } from "react";
import { ButtonToolbar, Table } from "react-bootstrap";
export default function DeletInput() {
  let [data, setData] = useState("");
  let [arr, setArr] = useState([]);

  function handelOnClick() {
    setArr([...arr, data]);
    setData("");
  }

  function handelDelete(index) {
    arr.splice(index, 1);
    setArr([...arr]);
    // setArr(arr.filter((item,index )=>index !==index))
  }
  return (
    <>
      <div>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></input>

        <button onClick={() => handelOnClick()}>Submit</button>
        {arr.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item}</td>
                    <td>20</td>
                    <td>Surat</td>
                    <td>
                      <button
                        onClick={() => {
                          handelDelete();
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : null}
      </div>
    </>
  );
}
