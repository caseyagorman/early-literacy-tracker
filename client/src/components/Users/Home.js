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
import { Glyphicon, Row } from "react-bootstrap";
const Home = props => (
  <div style={{ fontFamily: "krub" }}>
    <Row>
      {/* <Col> */}

      <div
        className="picture"
        style={{
          height: "50vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url(${bianca7})`,
          backgroundRepeat: "no-repeat"
        }}
      >
        <div
          className="blue-div"
          style={{
            height: "100%",
            position: "relative",
            float: "right",
            zIndex: 1,

            backgroundColor: "#003d59",

            color: "white",
            maxHeight: 600,
            width: "34%",
            display: "inline-block",
            textAlign: "center"
          }}
        >
          <h1 style={{ marginTop: "10%", fontSize: 60, textAlign: "center" }}>
            TrackIt!
          </h1>

          <br />

          <br />
          <p style={{ fontSize: 14, textAlign: "center" }}>
            TrackIt is a tool that allows teachers <br /> to test, track, and
            manage their students'
            <br /> letters, sounds, and sight words.
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
            </Link>
            <Link to={"/login"}>
              <button
                style={{
                  marginLeft: 10,
                  backgroundColor: "#003d59",
                  color: "white",
                  fontSize: 20
                }}
              >
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
    </Row>
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
              padding: 2,
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
      <div style={{ marginRight: 60 }}>
        <Row>
          <div
            style={{
              marginLeft: 140,
              display: "inline-block",
              float: "right"
            }}
          >
            <h4>View and manage students </h4>
            <br />
            <div style={{ height: 505, border: "1px solid #003d59" }}>
              <br />
              <br />
              <br />
              <img
                style={{
                  display: "inline-block",
                  maxWidth: 450,
                  maxHeight: 500
                }}
                src={StudentPage}
                alt="Logo"
              />
            </div>
          </div>

          <div
            style={{
              display: "inline-block",
              float: "right"
            }}
          >
            <h4>Check in on individual students</h4>
            <br />
            <div
              style={{
                height: 505,
                padding: 2,
                border: "1px solid #003d59",
                display: "inline-block"
              }}
            >
              <br />

              <img
                style={{
                  display: "inline-block",
                  maxWidth: 450,
                  maxHeight: 500,
                  marginTop: 30
                }}
                src={DetailPage}
                alt="Logo"
              />
            </div>
          </div>
        </Row>
        <br />
        <Row>
          <div
            style={{
              marginLeft: 140,
              display: "inline-block",
              float: "right"
            }}
          >
            <h4>Individual student data </h4>
            <br />
            <div
              style={{ height: 450, padding: 2, border: "1px solid #003d59" }}
            >
              {" "}
              <br />
              <br />
              <br />
              <img
                style={{
                  display: "inline-block",
                  maxWidth: 450,
                  maxHeight: 500
                }}
                src={StudentDetailData}
                alt="Logo"
              />
            </div>
          </div>

          <div
            style={{
              display: "inline-block",
              float: "right"
            }}
          >
            <h4>Whole class data</h4>
            <br />

            <div
              style={{
                height: 450,
                padding: 2,
                border: "1px solid #003d59",
                display: "inline-block"
              }}
            >
              <br />
              <br />
              <br />
              <img
                style={{
                  display: "inline-block",
                  maxWidth: 450,
                  maxHeight: 500,
                  marginTop: 30
                }}
                src={WordData}
                alt="Logo"
              />
            </div>
          </div>
        </Row>
        <br />
        <Row>
          <div
            style={{
              marginLeft: 140,
              display: "inline-block",
              float: "right"
            }}
          >
            <h4>Manage student groups</h4>
            <br />
            <br />

            <div
              style={{ height: 505, padding: 2, border: "1px solid #003d59" }}
            >
              <br />
              <img
                style={{
                  display: "inline-block",
                  maxWidth: 450,
                  maxHeight: 500
                }}
                src={GroupPage}
                alt="Logo"
              />
            </div>
          </div>

          <div
            style={{
              display: "inline-block",
              float: "right"
            }}
          >
            <h4>
              Add whole class or custom words,
              <br /> letters, and sounds{" "}
            </h4>
            <br />

            <div
              style={{
                height: 505,
                padding: 2,
                border: "1px solid #003d59",
                display: "inline-block"
              }}
            >
              <br />
              <img
                style={{
                  display: "inline-block",
                  maxWidth: 450,
                  maxHeight: 500,
                  marginTop: 30
                }}
                src={AddWordForm}
                alt="Logo"
              />
            </div>
          </div>
        </Row>
      </div>
    </div>
  </div>
);

export default Home;
