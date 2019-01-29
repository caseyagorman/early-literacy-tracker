import React from "react";
import RequestResetPasswordForm from "./RequestResetPasswordForm";
import "./static/user.css";

const RequestResetPasswordPage = props => (
  <div className="container">
    <h3 id="reset-password">
      {" "}
      <b>Reset password </b>
    </h3>
    <p id="instructions">
      <br />
      Enter your email address to receive an email with
      <br /> a link to a page where you can reset your password.{" "}
    </p>
    <br />
    <div className="user">
      <RequestResetPasswordForm
        email={props.email}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
    </div>
  </div>
);

export default RequestResetPasswordPage;
