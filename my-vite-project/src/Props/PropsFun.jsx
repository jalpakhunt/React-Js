import React from 'react'

export default function PropsFun(props) {

  return (
    <div>
      <h1>{props.name}{props.age}</h1>
      <h1>{props?.arr?.[0]}</h1>
      {/* <h1>{'${props.arr}'}</h1> */}
    </div>
  )
}
