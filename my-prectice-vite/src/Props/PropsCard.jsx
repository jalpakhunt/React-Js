import React, { useState } from 'react'
import "./Card.css";

export default function PropsCard(props) {

    let [card,setCard]  = useState(false)

    function FunCard(params) {
        setCard(true)
        
    }
  return (
    <div className="header">
    
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contect</a>
        <a href='#'>Features</a>
    
    <body>
        <h1>{props.title}</h1>
        <h4>{props.text}</h4>
        <button onClick={()=>{FunCard()}}>Click Me!</button>
    </body>
    {/* <footer>
        <a>Address</a>
        <a>Contect us</a>
        <a>Address</a>
    </footer> */}
    {/* <div className='container'>
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
      <p>{props.lorem}</p>
      <button onClick={()=>{FunCard()}}>Click Me!</button> */}
    </div>
  )
}
