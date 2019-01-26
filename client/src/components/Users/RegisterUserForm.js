import React from "react";

const RegisterUserForm = props => (
  <div className="container">
    <h1>
      <strong>Register</strong>
    </h1>
    <div className="form-group" />
    <form onSubmit={props.handleSubmit}>
      <label className="login-form">Username</label>
      <input
        className="form-control"
        name="username"
        type="text"
        value={props.value}
        onChange={props.handleChange}
      />
      <label className="login-form">email</label>
      <input
        className="form-control"
        name="email"
        type="email"
        value={props.value}
        onChange={props.handleChange}
      />
      <label className="login-form">Password</label>
      <input
        className="form-control"
        name="password"
        type="password"
        value={props.value}
        onChange={props.handleChange}
      />
      <label className="login-form">Confirm password</label>
      <input
        className="form-control"
        name="confirmPassword"
        type="password"
        value={props.value}
        onChange={props.handleChange}
      />
      <div>
        <br />
      </div>
      <button id="register-user-button">Register</button>
    </form>
  </div>
);

export default RegisterUserForm;
