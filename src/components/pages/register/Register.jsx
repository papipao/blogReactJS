import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="register">
      <span className="register--title">Register</span>
      <form className="register--form">
        <label>Username</label>
        <input type="text" placeholder="Enter your username..." className="register--input" />
        <label>E-mail</label>
        <input type="text" placeholder="Enter your email..." className="register--input" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." className="register--input" />
        <button className="register--btn">Register</button>
      </form>
      <button className="register--loginBtn">Login</button>
    </div>
  );
}

export default Register;
