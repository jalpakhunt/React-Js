import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function RegistrationForm() {
  let [user, setUser] = useState("");
  let [data, setData] = useState([]);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <div className="card">
      <div className="d-flex justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Freactjsexample.com%2Fcontent%2Fimages%2F2019%2F11%2Freact-interactive-paycard.jpg&tbnid=9xsRKJlmbYcT0M&vet=12ahUKEwiY8IO9h7aAAxWK2zgGHX66DfsQMygjegUIARCbAg..i&imgrefurl=https%3A%2F%2Freactjsexample.com%2Fa-fantastic-credit-card-form-with-smooth-and-sweet-micro-interactions%2F&docid=1lUyPllutcgJzM&w=796&h=598&q=react%20js%20in%20card%20img&ved=2ahUKEwiY8IO9h7aAAxWK2zgGHX66DfsQMygjegUIARCbAg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              quasi delectus doloremque qui repellat dolores itaque nam eveniet
              sapiente hic soluta, impedit doloribus natus laboriosam blanditiis
              eius dignissimos aliquid possimus.
            </Card.Text>
          </Card.Body>
         <button className="d-flex">Submit</button>
        </Card>
        </div>
      </div>
    </div>
  );
}
