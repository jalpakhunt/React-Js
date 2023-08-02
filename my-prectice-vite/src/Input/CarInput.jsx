import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Car.css";

export default function CarInput() {
  let [car, setCar] = useState({ name: "", number: "" });

  let [data, setData] = useState([]);

  function getData(e) {
    setCar({ ...car, [e.target.name]: e?.target?.value });
  }

  function handelSubmit() {
    setData([...data, car]);
    setCar({ name: "", number: "" });
  }

  //   function handelRemove(e) {
  //     setData(data.filter(e => e!== e))
  //     setCar([{ name: "", number: ""}])

  //   }

  return (
    <div>
      <div className="inputCar">
        <label htmlFor="name">Car Name:</label>
        <input
          type="text"
          name="name"
          value={car.name}
          placeholder="Enter Car Name"
          onChange={(e) => getData(e)}
        />

        <label htmlFor="number">Car Number:</label>
        <input
          type="number"
          name="number"
          value={car.number}
          placeholder="Enter Number:"
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
        {/* <Button
          onClick={() => {
            handelRemove();
          }}
          className="mt-3 p-2"
          variant="secondary"
        >
          Remove
        </Button> */}
        <div>
          {data.map((e, i) => {
            return (
              <h1 key={i }>
                <p>Name: {e.name}</p>
                <p>Number: {e.number}</p>
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
}
