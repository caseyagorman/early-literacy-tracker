import React from "react";
import image from "./static/Literacy9.png";
import "./static/user.css";

const LoginUserForm = props => (
  <form onSubmit={props.handleSubmit} className="form-container">
    <label className="login-form" id="login-form-username">
      Username
    </label>
    <input
      id="username"
      name="username"
      type="text"
      value={props.username}
      onChange={props.handleChange}
    />
    <br />
    <label className="login-form">Password</label>
    <input
      id="password"
      name="password"
      type="password"
      value={props.password}
      onChange={props.handleChange}
    />
    <p id="login-error">{props.loginError ? props.loginError : null}</p>
    <br />
    <br />
    <button id="login-button" type="submit">
      Sign in
      {/* <img src={image} alt="Logo" /> */}
    </button>
  </form>
);

export default LoginUserForm;
