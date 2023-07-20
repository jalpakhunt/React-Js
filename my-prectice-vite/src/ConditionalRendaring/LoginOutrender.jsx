import React, { useState } from "react";

export default function LoginOutrender() {
  let [login, setLogIn] = useState(true);

  function OnLogin() {
    setLogIn(true);
  }
  function OnLogout() {
    setLogIn(false);
  }
  return (
    <div>
      {!login ? (
        <div>
          <h1>WelCome to Login</h1>
          <button onClick={() => {OnLogin()}}>LogIn</button>
        </div>
      ) : (
        <div>
          <h1>Welcome to Logout</h1>
          <button onClick={() => {OnLogout()}}>LogOut</button>
        </div>
      )}
    </div>
  );
}
