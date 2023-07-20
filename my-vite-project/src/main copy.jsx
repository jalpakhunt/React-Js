import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// let root = ReactDOM.createRoot(document.getElementById("root"));

// let head = <h1>my heading</h1>;
// let body = <h2>my body tag </h2>;
// let footer = <p>my footer tag</p>;
// let para = (
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quos.
//     Tempora fugit rerum repellendus ea similique facere obcaecati, quos eos vero
//     laborum eum? Aspernatur fugit culpa inventore vero quam consequatur!
//   </p>
// );

// root.render(
//   <h1>
//     {head}
//     {body} {footer}{para}{[1,2,3,4,5,6].map((e)=>{
//       return e;
//     })}
//   </h1>
// );

// ==========================================================================>

let root = ReactDOM.createRoot(document.getElementById("root"));

// let obj =<h1>fname="jalpa",hname="chinmai",lname="savaliya",age=23</h1>
let fname = <h1>jalpa</h1>;
let hname = <h2>chinmai</h2>;
let lname = <h3>savaliya</h3>;

let arr = [1,2,4,5,67,45];
// let obj = <h3>{{ name: "jalpa", age: 23 }} </h3>;

root.render(
  <h1>
    {fname}
    {hname}
    {lname}
    
    {arr.map((e) => {
      return e;
    })}
    
  </h1>
);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
