import React, { useState } from "react";

export default function FunColor() {
  let [name1, setName1] = useState("jalpa");
  let [age, setAge]= useState(23);

  let [obj, setObj]= useState({color:"red",year1:23});
  console.log("🚀 ~ file: FunColor.jsx:8 ~ FunColor ~ obj:", obj.color)


function handelChange(params) {
  setAge(age +1);
}

  return (
    <div>
      <h1>My name is{name1} year in {age} year old.</h1>
      <h2>my favriout color is{obj.color},i m in {obj.year1}year old</h2>
      <button onClick={()=>handelChange()}>Click me!</button>
    </div>
  );
}
