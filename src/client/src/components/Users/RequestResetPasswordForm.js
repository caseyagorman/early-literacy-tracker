import React from "react";
import "./static/user.css";

const RequestResetPasswordForm = props => (
  <form onSubmit={props.handleSubmit} className="form-container">
    <input
      id="email"
      name="email"
      type="email"
      value={props.email}
      onChange={props.handleChange}
    />
    <br />
    <button id="request-password-button" type="submit">
      reset password
    </button>{" "}
  </form>
);

export default RequestResetPasswordForm;
