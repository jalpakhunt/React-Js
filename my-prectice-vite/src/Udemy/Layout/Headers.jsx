import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Header.css"

export default function Headers() {
  return (
    <>
      <div className="header">
        <Container className="p-3 md-3">
          <h1 className="head">ReactMeals</h1>
          <Button className="btn" variant="dark">Dark</Button>
        </Container>
      </div>
      <div className="images">
        <img
          src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Pizza Images"
        />
      </div>
    </>
  );
}
