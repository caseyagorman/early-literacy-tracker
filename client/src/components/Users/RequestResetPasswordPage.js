import React from "react";
import RequestResetPasswordForm from "./RequestResetPasswordForm";
import "./static/user.css";

const RequestResetPasswordPage = props => (
  <div className="container">
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
