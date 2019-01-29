import React from "react";
import ResetPasswordForm from "./ResetPasswordForm";
import "./static/user.css";

const ResetPasswordPage = props => (
  <div className="container">
    <div className="user">
      <ResetPasswordForm
        password={this.state.password}
        confirmPassword={this.state.confirmPassword}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    </div>
  </div>
);

export default ResetPasswordPage;
