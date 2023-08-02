import React, { Component } from 'react'

export default class LifeCycleMethod extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        console.log('====componentDidMount===')
    }
    componentDidUpdate(prevProps,prevState){
      if(this.state.count>=10){
        alert("you are pass to the class")
        this.setState({count:0})
      }
      
        console.log('====componentDidUpdate===')
    }
    componentWillUnmount(){
        console.log('====componentWillUnmount===')
    }
    Inc(){
      this.setState({count:this.state.count+1})
    }

  render() {
    
    return (
      <div>
      <h1> Heading</h1>
      <h2>{this.state.count}</h2>
      <button onClick={()=>this.Inc()}>Click</button>
        
      </div>
    )
  }
}
