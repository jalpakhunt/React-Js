import React from 'react'

export default function MapCard(props) {
  return (
    <div>
      <h1>{props?.data?.StateName}</h1>
      <h1>{props?.data?.cityName}</h1>
      <h1>{props?.data?.population}</h1>
    </div>
  )
}
