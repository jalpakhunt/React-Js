import React from "react";

export default function PropsProject2(props) {
  if (props.inputType === "email") {
    return (
      <div>
        <label htmlFor="email">Enter Your Email</label>
        <input type="email" id="email" />
      </div>
    );
  } else if (props.inputType === "password") {
    return (
      <div>
        <label htmlFor="password">Enter Your PassWord</label>
        <input type="password" id="pass" />
      </div>
    );
  } else if (props.inputType === "color") {
    return (
      <div>
        <label htmlFor="Color">Change Color</label>
        <input type="color" id="Color" />
      </div>
    );
  } else if (props.inputType === "address") {
    return (
      <div>
        <label htmlFor="address">Enter Your Address</label>
        <input type="text" id="address" />
      </div>
    );
  }
}
