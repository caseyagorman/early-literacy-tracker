import React from "react";
import RetrievePasswordForm from "./RetrievePasswordForm";
import "./static/user.css";

const RetrievePasswordPage = props => (
  <div className="container">
    <div className="user">
      <RetrievePasswordForm
        email={props.email}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
    </div>
  </div>
);

export default RetrievePasswordPage;
