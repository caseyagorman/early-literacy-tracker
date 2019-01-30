import React from "react";
import LoginUserForm from "./LoginUserForm";
import "./static/user.css";
import { Link } from "react-router-dom";
const LoginUserPage = props => (
  <div className="container">
    <div className="user">
      <br />
      <br />
      <h1>
        Welcome to TrackIt!
        <br />
        <br />
      </h1>
      <p className="introduction">
        TrackIt is a tool that allows teachers to test, track, <br /> and manage
        their students' letters, sounds, and sight words.
        <br />
        Login to view your students. If you don't have an account, click{" "}
        <Link to={"/register"} id="login-link">
          {" "}
          here{" "}
        </Link>{" "}
        to register.
      </p>
      <br />
      <LoginUserForm
        username={props.username}
        password={props.password}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        loginError={props.loginError}
      />
    </div>
    <br />
    <p className="introduction" id="forgot-password">
      {" "}
      Forgot your password? Click{" "}
      <Link id="forgot-password-link" to={"/forgot-password"}>
        {" "}
        here{" "}
      </Link>{" "}
    </p>
  </div>
);

export default LoginUserPage;
