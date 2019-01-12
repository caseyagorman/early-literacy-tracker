import React from "react";

const LoginUserForm = props => (
  <div className="container">
    <div />
    <form onSubmit={props.handleSubmit} className="form-container">
      <label className="login-form">Username</label>
      <input
        name="username"
        type="text"
        value={props.value}
        onChange={props.handleChange}
      />

      <label className="login-form">Password</label>
      <input
        id=""
        name="password"
        type="password"
        value={props.value}
        onChange={props.handleChange}
      />

      <div>
        <br />
      </div>
      <button id="login-button">Login</button>
    </form>
  </div>
);

export default LoginUserForm;
