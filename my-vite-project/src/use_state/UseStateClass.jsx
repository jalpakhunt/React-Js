import React, { Component } from "react";

export default class UseStateClass extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
    };
  }
  inc() {
    this.setState({ x: this.state.x + 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.x}</h1>
        <button
          onClick={() => {
            this.inc();
          }}
        >
          Click me!
        </button>
      </div>
    );
  }
}

