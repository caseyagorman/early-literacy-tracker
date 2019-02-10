import React from "react";
import "./static/user.css";
import StudentDetailData from "./static/StudentDetailData.png";
import StudentPage from "./static/StudentPage.png";
import OldMethod from "./static/OldMethod.png";
import WordData from "./static/WordData.png";
import GroupPage from "./static/GroupPage.png";
import DetailPage from "./static/DetailPage.png";
import AddSounds from "./static/AddSounds.png";
import { Link } from "react-router-dom";
const Home = props => (
  <div>
    <div
      className="jumbotron"
      style={{
        fontFamily: "Krub",
        textAlign: "center",
        background: `url(${OldMethod})`,
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundColor: "rgb(1, 143, 117)",
        color: "white",
        marginTop: -20
      }}
    >
      <h1 style={{ fontSize: 60 }}>TrackIt!</h1>

      <br />

      <br />
      <p style={{ fontSize: 20 }}>
        TrackIt is a tool that allows teachers to test, track, <br /> and manage
        their students' letters, sounds, and sight words. <br />
        Scroll down to see more!
        <br />
        <br />
        <Link to={"/register"}>
          <button
            style={{
              backgroundColor: "#003d59",
              color: "white",
              fontSize: 20
            }}
          >
            Register
          </button>
        </Link>{" "}
      </p>
    </div>

    <div className="container">
      <div style={{ textAlign: "center", fontFamily: "Krub" }}>
        <br />
        <img style={{ maxWidth: 800 }} src={StudentPage} alt="Logo" />
        <br />
        <br />
        <h4>
          Check in on individual students, assign groups and reading levels
        </h4>
        <br />
        <img style={{ maxWidth: 800 }} src={DetailPage} alt="Logo" />
        <br />
        <br />
        <h4>View visual representations of class data</h4>
        <br />
        <img
          style={{ maxWidth: 800 }}
          src={StudentDetailData}
          alt="Logo"
        />{" "}
        <br />
        <br />
        <img style={{ maxWidth: 800 }} src={WordData} alt="Logo" />
        <br />
        <br />
        <h4>Manage groups and add notes</h4>
        <br />
        <br />
        <img style={{ maxWidth: 800 }} src={GroupPage} alt="Logo" />
        <br />
        <br />
        <h4>
          <br />
          <br />
          Assign words, letters, and sounds to all students as well as custom
          words to individual students
        </h4>
        <br />
        <br />
        <img style={{ maxWidth: 800 }} src={AddSounds} alt="Logo" />
      </div>
    </div>
  </div>
);

export default Home;
