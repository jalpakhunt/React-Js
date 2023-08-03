import React, { useState } from "react";
import PropsImg from "./PropsImg";
import "./Blog.css"

export default function PropsArr() {
  <PropsImg />;

  let data = [
    {
      img: "https://picsum.photos/id/3/367/267",
      name: " Lorem Picsum"
    },
    {
      img: "https://fastly.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g",
      name: "Lorema Picsum",
    },
    {
      img: "https://picsum.photos/id/76/367/267",
      name: "Loremb Picsum",
    },
    {
      img: "https://picsum.photos/id/85/367/267",
      name: "Loremc Picsum",
    },
    {
      img: "https://picsum.photos/id/88/367/267",
      name: "Loremd Picsum",
    },
    {
      img: "https://picsum.photos/id/22/367/267",
      name: "Loreme Picsum",
    },
  ];
  let [arr, setArr] = useState(data);

  return (
    <div>
    <h1>Your Title</h1>
      {arr.map((e) => {
        return (
           
            <PropsImg
             key={e}
            img={e.img}
            name={e.name}
            />
            
            

           
         
        );
      })}
    </div>
  );
}
