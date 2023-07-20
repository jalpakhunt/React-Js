
import './App.css'
import React from 'react'
import UseStateFun from './use_state/UseStateFun'
import UseStateClass from './use_state/UseStateClass'
import PropsFun from './Props/PropsFun'

export default function App() {
  return (
    <div>
      {/* <UseStateFun/>
      <UseStateClass/> */}


      {/* ========================props===================== */}
<PropsFun name={"jalpa"} age={23}/>
<PropsFun arr ={[1,2,3,4,5]}/>
    </div>
  )
}





