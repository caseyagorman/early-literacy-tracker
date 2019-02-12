import React from "react";
import "./static/user.css";
import StudentDetailData from "./static/StudentDetailData.png";
import StudentPage from "./static/StudentPage.png";
import bianca from "./static/bianca.png";
import WordData from "./static/WordData.png";
import GroupPage from "./static/GroupPage.png";
import DetailPage from "./static/DetailPage.png";
import AddSounds from "./static/AddSounds.png";
import { Link } from "react-router-dom";
import { Glyphicon, Row } from "react-bootstrap";
const Home = props => (
  <div>
    <div
      className="jumbotron"
      style={{
        height: 500,
        fontFamily: "Krub",
        textAlign: "center",
        background: `url(${bianca})`,
        backgroundSize: 1000,
        backgroundRepeat: "no-repeat",
        backgroundColor: "#003d59",
        color: "white",
        marginTop: -20
      }}
    >
      <div
        style={{
          width: 250,
          float: "right",
          marginRight: 0
        }}
      >
        <h1 style={{ fontSize: 80, textAlign: "center" }}>TrackIt!</h1>

        <br />

        <br />
        <p style={{ fontSize: 20, textAlign: "center" }}>
          TrackIt is a tool that allows <br /> teachers to test, track, and
          manage <br />
          their students' letters, sounds, and sight <br /> words. Scroll down
          to see more!
          <br />
          <br />
          <Link to={"/register"}>
            <button
              style={{
                backgroundColor: "#003d59",

                color: "white",
                fontSize: 24
              }}
            >
              Register
            </button>
          </Link>
          <Link to={"/login"}>
            <button
              style={{
                marginLeft: 10,
                backgroundColor: "#003d59",
                color: "white",
                fontSize: 24
              }}
            >
              Login
            </button>
          </Link>
        </p>
      </div>
    </div>

    <div
      className="container"
      style={{ textAlign: "center", fontFamily: "Krub" }}
    >
      <Row>
        <div style={{ display: "inline-block", margin: "5%" }}>
          <div
            style={{
              backgroundColor: "rgb(68, 133, 125, 0.6)",
              border: "5px solid #003d59",

              textAlign: "center",
              borderRadius: "50%",
              height: 150,
              width: 150
            }}
          >
            <Glyphicon
              style={{ marginTop: 30, fontSize: 80, color: "#003d59" }}
              glyph="glyphicon glyphicon-pencil"
            />
          </div>
          <br />
          <p style={{ fontSize: 20, textAlign: "center" }}>
            Test student <br />
            phonics skills
          </p>
        </div>
        <div style={{ display: "inline-block", margin: "5%" }}>
          <div
            style={{
              backgroundColor: "rgb(68, 133, 125, 0.6)",
              border: "5px solid #003d59",

              textAlign: "center",
              borderRadius: "50%",
              height: 150,
              width: 150
            }}
          >
            <Glyphicon
              style={{ marginTop: 30, fontSize: 80, color: "#003d59" }}
              glyph="glyphicon glyphicon-stats"
            />
          </div>
          <br />
          <p style={{ fontSize: 20, textAlign: "center" }}>
            Student data
            <br />
            visualizations
          </p>
        </div>
        <div style={{ display: "inline-block", margin: "5%" }}>
          <div
            style={{
              backgroundColor: "rgb(68, 133, 125, 0.6)",
              border: "5px solid #003d59",

              textAlign: "center",
              borderRadius: "50%",
              height: 150,
              width: 150
            }}
          >
            <Glyphicon
              style={{ marginTop: 30, fontSize: 80, color: "#003d59" }}
              glyph="glyphicon glyphicon-tasks"
            />
          </div>
          <br />
          <p style={{ fontSize: 20, textAlign: "center" }}>
            Sort and group
            <br /> students by focus
          </p>
        </div>
      </Row>
      <br />
      <img style={{ maxWidth: 800 }} src={StudentPage} alt="Logo" />
      <br />
      <br />
      <h4>Check in on individual students, assign groups and reading levels</h4>
      <br />
      <img style={{ maxWidth: 800 }} src={DetailPage} alt="Logo" />
      <br />
      <br />
      <h4>View visual representations of class data</h4>
      <br />
      <img style={{ maxWidth: 800 }} src={StudentDetailData} alt="Logo" />{" "}
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
);

export default Home;
