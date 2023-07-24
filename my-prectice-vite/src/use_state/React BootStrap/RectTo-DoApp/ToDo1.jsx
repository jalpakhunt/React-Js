import React, { useState } from "react";
import "./Application.css";
export default function ToDo1() {
  let [task, setTask] = useState("");
  let [inputValue, setInputValue] = useState([]);

  function handelOnClick(params) {
    // setInputValue([...inputValue,task])
    // setTask("new one")
    setInputValue((inputValue)=>{
        let newList = [...inputValue,task]
        return newList
    })
  }
  function  removeList(i) {
    let newData = inputValue.filter((el,id)=>{
        return i!=id;
    })
    setInputValue(newData)
     
  }

  return (
    <div>
      <header>
        <h1>ToDo List</h1>
      </header>
      <div className="container1">
        <label htmlFor="text">Task:</label>
        <input
          type="text"
          placeholder="Add Input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            handelOnClick();
          }}
        >
          Add
        </button>
        {/* <div className="loop"> */}
            { Array.isArray (inputValue) &&
                inputValue.map((e,i)=>{
                    return <h1 key={i}>{e}</h1>
                })
            }
                <button onClick={()=>{removeList(i)}}>remove</button>
        {/* </div> */}
        {/* <div className="buttons">
            <button onClick={()=>{completeTask()}}>Complete Task</button>
            <button onClick={()=>{deleteTask()}}>Delete Task</button>
        </div> */}
      </div>
    </div>
  );
}
