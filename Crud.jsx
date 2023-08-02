import React, { useState } from "react";
import { Table } from "react-bootstrap";

export default function Crud() {
  let [data, setData] = useState("");
  let [arr, setArr] = useState([]);
  let [newone, setNew] = useState(true);
  let [ind, setInd] = useState(null);

  function handelOnClick() {
    setArr([...arr, data]);
    setData("");
  }
  function ClickUpdata() {
    arr.splice(ind, 1, data);
    setArr([...arr]);
    setData("");
    setNew(true);
  }

  function handelDelete(index) {
    arr.splice(index, 1);
    setArr([...arr]);
    // setArr(arr.filter((item,index )=>index !==index))
  }
  function handelUpdata(i, items) {
    setArr([...arr]);
    setData(items);
    setNew(false)
    setInd(i)
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
        {newone ? (
          <button onClick={() => handelOnClick()}>Submit</button>
        ) : (
          <button onClick={() => ClickUpdata()}>Updata</button>
        )}

        <div className="tables">
          {arr.length > 0 ? (
            <>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {arr.map((e, index) => {
                    return (
                      <tr key={index}>
                        <td>{e}</td>

                        <td>
                          <button
                            onClick={() => {
                              handelDelete();
                            }}
                          >
                            Delete
                          </button>
                          <button
                            className="ms 5px"
                            onClick={() => {
                              handelUpdata(index, e);
                            }}
                          >
                            Updata
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </>
          ) : (
            <h1>data is not found</h1>
          )}
        </div>
      </div>
    </>
  );
}
