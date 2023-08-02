import React, { Component } from "react";

export default class InputClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      arr: [],
    };
  }
  handelChange(e) {
    this.setState({ ...this.state,name: e?.target?.value });
  }
  handelClick() {
    this.setState({ arr: [...this.state.arr, this.state.name] });
    this.setState({ name: "" });
  }
  render() {
    return (
      <div>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          onChange={(e) => this.handelChange(e)}
          value={this.state.name}
        />

        <br />
        <button
          onClick={() => {
            this.handelClick();
          }}
        >
          Submit
        </button>
        <div className="loop">
          {this.state.arr.map((item, index) => {
            return (
              <div key={index}>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
