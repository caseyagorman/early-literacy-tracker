import React from "react";
import image from "./static/Literacy9.png";
import "./static/user.css";

const RequestResetPasswordForm = props => (
  <form onSubmit={props.handleSubmit} className="form-container">
    <label className="reguest-form">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      value={props.email}
      onChange={props.handleChange}
    />
    <br />

    <button id="login-button" type="submit">
      <img src={image} alt="Logo" />
    </button>
  </form>
);

export default RequestResetPasswordForm;
