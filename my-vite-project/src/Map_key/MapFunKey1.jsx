import React from 'react'

export default function MapFunKey1() {
let names = ["jalpa","chinami","binal","rupesh"]


  return (
    <>
    {
        names.map((e,i)=>{
            return <h1 key={i}>{e}</h1>
        })
    }
      
    </>
  )
}
