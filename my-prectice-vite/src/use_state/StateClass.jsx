import React, { Component } from "react";

export default class StateClass extends Component {
  constructor(params) {
    super();
    this.state = {
      number: "---",
    };
  }
  Class2() {
    console.log(this.state.number);
    this.setState({ number: "jalpa" });
  }
  render() {
    return (
      <div>
        <h1>this is my Stateclass2 example in output:{this.state.number}</h1>
        <button onClick={() => this.Class2()}>StateClass2</button>
      </div>
    );
  }
}
