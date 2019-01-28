import React from "react";
import image from "./static/Literacy9.png";
import "./static/user.css";

const RetrievePasswordForm = props => (
  <form onSubmit={props.handleSubmit} className="form-container">
    <label className="login-form">Email</label>
    <input
      id="email"
      name="email"
      type="text"
      value={props.email}
      onChange={props.handleChange}
    />
    <br />

    <button id="login-button" type="submit">
      <img src={image} alt="Logo" />
    </button>
  </form>
);

export default RetrievePasswordForm;
