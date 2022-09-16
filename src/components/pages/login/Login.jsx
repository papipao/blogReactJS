import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <span className="login--title">Login</span>
      <form className="login--form">
        <label>E-mail</label>
        <input type="text" placeholder="Enter your email..." className="login--input" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." className="login--input" />
        <button className="login--btn">Login</button>
      </form>
      <button className="login--registerBtn">Register</button>
    </div>
  );
}

export default Login;
