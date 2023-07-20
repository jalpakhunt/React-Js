import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(params) {
        super();
       this.state ={
            buttonpressed: ""
        }
        
    }
    
    OnPressYes(){
        this.setState({buttonpressed:this.state.buttonpressed="Yes"});
        console.log("yes is pressed");
    }
    OnPressNo(){
        this.setState({buttonpressed:"No"})
        console.log("not pressed");
    }
  render() {
    return (
      <div>
      <h1>jalpa savaliya{this.state.buttonpressed}</h1>
      <button onClick={()=>{this.OnPressYes()}}>yes</button>
      <button onClick={()=>{this.OnPressNo()}}>No</button>
        
      </div>
    )
  }
}
