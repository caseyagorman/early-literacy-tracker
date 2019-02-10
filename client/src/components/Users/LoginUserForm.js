import React from "react";
import "./static/user.css";
import { Link } from "react-router-dom";
const LoginUserForm = props => (
  <div style={{ fontFamily: "Krub", textAlign: "center" }}>
    <form onSubmit={props.handleSubmit} className="form-container">
      <br />
      <br />
      <br />å<h3>Login</h3>
      <br />
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
      <button
        style={{
          height: 40,
          width: 70,
          backgroundColor: "#018f75",
          color: "white",
          borderRadius: 4
        }}
        type="submit"
      >
        Sign in
      </button>
      <br />
      <br />
      Forgot your password? Click <span />
      <Link
        style={{
          color: "#44857d",
          textDecoration: "underline",
          textDecorationColor: "#44857d"
        }}
        to={"/forgot-password"}
      >
        here.
      </Link>
    </form>
  </div>
);

export default LoginUserForm;
