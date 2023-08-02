import React, { useState } from "react";
import { Table } from "react-bootstrap";

export default function MultiCrud() {
  let [data, setData] = useState({ name: "", email: "", password: "" });
  let [arr, setArr] = useState([]);
  let [edit, setEdit] = useState(true);
  let [newone, setNew] = useState(null);

  function getData(e) {
    setData({ ...data, [e.target.name]: e?.target?.value });
  }

  function handelOnClick() {
    setArr([...arr, data]);
    setData({
      name: "",
      email: "",
      password: "",
    });
  }
  function handelDelete(index) {
    arr.splice(index, 1);
    setArr([...arr]);
  }
  function handelUpdata(index, mrp) {
    setData(mrp);
    setNew(index);
    setEdit(false)
  }

  function updataName() {
    if (newone || newone === 0) {

        arr.splice(newone, 1, data);
        setArr([...arr]);
        setData({ name: "", email: "", password: "" });
        setNew(null);
        setEdit(true)
        
    }else{
        alert("please select some data");
    }
  }
  return (
    <>
      <div>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={(e) => getData(e)}
        />
        <label htmlFor="pw">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={data.email}
          placeholder="Enter Email"
          onChange={(e) => getData(e)}
        />
        <label htmlFor="pw">PassWord:</label>
        <input
          type="number"
          name="password"
          id="pw"
          value={data.password}
          placeholder="Enter PassWord"
          onChange={(e) => getData(e)}
        />
        {
            edit? (
                <button className="ms-3" onClick={() => handelOnClick()}>Submit</button>

            ):(
                <button className="ms-3" onClick={() => updataName()}>Updata</button>

            )
        }
       
       

        <div className="tables">
          {arr.length > 0 ? (
            <>
              <Table>
                <thead>
                  <tr>
                    <td>No.</td>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {arr.map((e, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.password}</td>

                        <td>
                          <button
                          className="ms-3"
                            onClick={() => {
                              handelDelete();
                            }}
                          >
                            Delete
                          </button>
                          <button
                           className="ms-5"
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
