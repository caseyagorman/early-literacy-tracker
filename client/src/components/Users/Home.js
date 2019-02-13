import React from "react";
import "./static/user.css";
import StudentDetailData from "./static/StudentDetailData.png";
import StudentPage from "./static/StudentPage.png";
import bianca7 from "./static/bianca7.png";
import WordData from "./static/WordData.png";
import GroupPage from "./static/GroupPage.png";
import DetailPage from "./static/DetailPage.png";
import AddWordForm from "./static/AddWordForm.png";
import { Link } from "react-router-dom";
import { Glyphicon, Row, Col } from "react-bootstrap";
const Home = props => (
  <div style={{ fontFamily: "krub" }}>
    <Row>
      {/* <Col> */}

      <div className="picture">
        <div className="blue-div">
          <h1 className="header" style={{}}>
            TrackIt!
          </h1>

          <br />

          <br />
          <p className="intro">
            TrackIt is a tool that allows teachers <br /> to test, track, and
            manage their students'
            <br /> letters, sounds, and sight words.
            <br />
            <br />
            <Link to={"/register"}>
              <button className="welcome-button">Register</button>
            </Link>
            <Link to={"/login"}>
              <button className="welcome-button">Login</button>
            </Link>
          </p>
        </div>
      </div>
    </Row>
    <Row>
      <div className="circle-div">
        <div className="circle">
          <Glyphicon
            style={{ marginTop: 30, fontSize: 80, color: "#003d59" }}
            glyph="glyphicon glyphicon-pencil"
          />
          <br />
          <br />

          <br />
          <p style={{ fontSize: 20, textAlign: "center" }}>
            Test student <br />
            phonics skills
          </p>
        </div>
        <div className="circle">
          <Glyphicon
            style={{ marginTop: 30, fontSize: 80, color: "#003d59" }}
            glyph="glyphicon glyphicon-stats"
          />

          <br />
          <br />
          <br />
          <p style={{ fontSize: 20, textAlign: "center" }}>
            Student data
            <br />
            visualizations
          </p>
        </div>
        <div className="circle">
          <Glyphicon
            style={{ marginTop: 30, fontSize: 80, color: "#003d59" }}
            glyph="glyphicon glyphicon-tasks"
          />

          <br />
          <br />
          <br />
          <p style={{ fontSize: 20, textAlign: "center" }}>
            Sort and group
            <br /> students
          </p>
        </div>
      </div>
    </Row>
    <div className="samples">
      <Row>
        <Col>
          <br />
          <br />
          <h4>View and manage students </h4>
          <br />
          <div className="bordered-div">
            <img src={StudentPage} alt="Logo" />
          </div>
        </Col>
        <Col>
          <br />
          <h4>Check in on individual students</h4>
          <br />
          <div className="bordered-div">
            <br />

            <img src={DetailPage} alt="Logo" />
          </div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <br />
          <h4>Individual student data </h4>
          <br />
          <div className="bordered-div">
            <br />
            <div>
              <img src={StudentDetailData} alt="Logo" />
            </div>
          </div>
        </Col>

        <Col>
          <br />
          <h4>Whole class data</h4>
          <br />

          <div className="bordered-div">
            <br />
            <br />
            <br />
            <div>
              <img src={WordData} alt="Logo" />
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <br />
          <h4>Manage student groups</h4>
          <br />
          <div className="bordered-div">
            <br />
            <br />

            <br />

            <img src={GroupPage} alt="Logo" />
          </div>
        </Col>
        <Col>
          <br />
          <h4>
            Add whole class or custom words,
            <br /> letters, and sounds{" "}
          </h4>
          <br />

          <div className="bordered-div">
            <br />

            <img src={AddWordForm} alt="Logo" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Home;
