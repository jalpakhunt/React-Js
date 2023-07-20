import React from "react";

export default function PropsProject1(props) {
  return props.inputType === "email" ? (
    <div>
      <label htmlFor="email">Enter Your Email</label>
      <input type="email" id="email" />
    </div>
  ) : (
    <div>
      <label htmlFor="pass">Enter Your PassWord</label>
      <input type="PassWord" id="pass" />
    </div>
  );
}

// export default function PropsProject1(props) {
//   if (props.inputType === "email") {
//     return (
//       <div>
//         <label htmlFor="email">Enter Yoyr Email</label>
//         <input type="email" id="email" />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <label htmlFor="PassWorda">Enter Yoyr PassWord</label>
//         <input type="password" id="passWord" />
//       </div>
//     );
//   }
// }
