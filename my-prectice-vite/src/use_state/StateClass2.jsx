import React, { Component } from "react";

export default class StateClass2 extends Component {
  constructor(params) {
    super();
    this.obj = {
      x: 20,
    };
  }
  fun() {
    this.setObj({ x: this.obj.x +1 });
  }
  render() {
    return (
      <div>
        <h1>this is my {this.obj.x} car</h1>
        <button
          onClick={() => {
            this.fun();
          }}
        >
          Choice
        </button>
      </div>
    );
  }
}

// export default class UseStateClass extends Component {
//   constructor() {
//     super();
//     this.state = {
//       x: 20,
//     };
//   }
//   inc() {
//     this.setState({ x: this.state.x + 1 });
//   }
//   render() {
//     return (
//       <div>
//         <h1>this is my number{this.state.x}</h1>
//         <button
//           onClick={() => {
//             this.inc();
//           }}
//         >
//           Click me!
//         </button>
//       </div>
//     );
//   }
// }
