import React from "react";

const ResetPasswordForm = props => (
  <div className="container" id="register-page">
    <h1>
      <strong>Reset Password</strong>
    </h1>
    <div className="form-group" />
    <form onSubmit={props.handleSubmit}>
      <label className="login-form">Enter new password</label>
      <input
        className="form-control"
        name="password"
        type="password"
        value={props.value}
        onChange={props.handleChange}
      />
      <label className="login-form">Confirm new password</label>
      <input
        className="form-control"
        name="confirmPassword"
        type="password"
        value={props.value}
        onChange={props.handleChange}
      />{" "}
      <div>
        <br />
      </div>
      <button id="register-user-button">Reset password</button>
    </form>
  </div>
);

export default ResetPasswordForm;
