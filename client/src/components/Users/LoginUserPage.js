import React from "react";
import LoginUserForm from "./LoginUserForm";
import "./static/user.css";
import { Link } from "react-router-dom";
const LoginUserPage = props => (
  <div className="container">
    <div className="user">
      <h1>
        Welcome to TrackIt!
        <br />
      </h1>
      <p className="introduction">
        TrackIt is a tool that allows teachers to test, track, and manage their
        students' letters, sounds, and sight words.
        <br />
        Login to view your students. If you don't have an account, click{" "}
        <Link to={"/register"} id="login-link">
          {" "}
          here{" "}
        </Link>{" "}
        to register.
      </p>

      <LoginUserForm
        username={props.username}
        password={props.password}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
    </div>
  </div>
);

export default LoginUserPage;
