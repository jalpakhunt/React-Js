import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function NewsLatter() {
  let [data, setData] = useState("");
  let [arr, setArr] = useState([]);
  let [showPopup, setShowPopup] = useState(false);
  function handelChange(e) {
    setData(e?.target?.value);
  }

  function handelSubmit() {
    setArr([...arr, data]);
    setData("");
    setShowPopup(true);
  }
  return (
    <>
      <h1>News Letter</h1>

      <Button
        onClick={() => {
          handelSubmit();
        }}
        variant="primary"
        type="submit"
      >
        Sign Up
      </Button>

      <div className="loops">
        {arr.map((e, i) => {
          return <h1 key={i}>{e}</h1>;
        })}
      </div>

      {/* =============show popup========================= */}

      {showPopup ? (
        <Form>
          <Form.Group className="mb-3 br-3">
            <Form.Control
              type="email"
              placeholder="Enter  Your email"
              value={data}
              onChange={handelChange}
            />
          </Form.Group>
        </Form>
      ) : null}
      {/* </div> */}
    </>
  );
}
