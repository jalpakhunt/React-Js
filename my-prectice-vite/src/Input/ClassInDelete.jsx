import React, { Component } from "react";

export default class ClassInDelete extends Component {
  constructor() {
    super();
    this.state = {
      num: "",
      arr: [],
    };
  }
  handelChange(e) {
    this.setState({ ...this.state, num: e?.target?.value });
  }
  handelAdd() {
    this.setState({
      arr: [...this.state.arr, this.state.num],
    });
    this.setState({
      num: "",
    });
  }
  handelDelete(){
    this.state.arr.splice(0,1)
    this.setState([...this.state.arr, this.state.num])
  }
  render() {
    return (
      <div>
        <label htmlFor="number">Number:</label>
        <input
          type="number"
          id="number"
          onChange={(e) => this.handelChange(e)}
          value={this.state.num}
        />
        <button onClick={() => this.handelAdd()}>ADD</button>
        <button onClick={() => this.handelDelete()}>Delete</button>


        <div className="deleteLoop">
          {this.state.arr.map((e, i) => {
            return <h1 key={i}>{e}</h1>;
          })}
        </div>
      </div>
    );
  }
}
