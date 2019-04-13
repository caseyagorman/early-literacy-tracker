import React from "react";
import "./static/students.css";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const AllStudentsInstructions = props => (
  <div className="container">
    <br />
    <h1 style={{ fontSize: 50 }}>Students</h1>
    <br />
    Click links to test student, view words, letters, and sounds student is
    learning, and view student data. Hover over links for more information.
    <br />
    <br />
    <OverlayTrigger
      placement={"top"}
      overlay={<Tooltip>View words each student is learning</Tooltip>}
    >
      <Link to="/student-charts/words/">
        <button
          style={{
            borderRadius: 5,
            padding: 5,

            margin: 5,
            height: 50,
            width: 125,
            fontSize: 15,
            display: "inline-block",
            backgroundColor: "#018f75",
            color: "white"
          }}
        >
          Word Charts
        </button>
      </Link>
    </OverlayTrigger>
    <OverlayTrigger
      placement={"top"}
      overlay={<Tooltip>View letters each student is learning</Tooltip>}
    >
      <Link to="/student-charts/letters/">
        <button
          style={{
            borderRadius: 5,
            padding: 5,
            margin: 5,
            fontSize: 15,
            height: 50,
            width: 125,
            display: "inline-block",
            backgroundColor: "#018f75",
            color: "white"
          }}
        >
          Letter Charts
        </button>
      </Link>
    </OverlayTrigger>
    <OverlayTrigger
      placement={"top"}
      overlay={<Tooltip>View sounds each student is learning</Tooltip>}
    >
      <Link to="/student-charts/sounds/">
        <button
          style={{
            fontSize: 15,
            margin: 5,
            borderRadius: 5,
            padding: 5,
            height: 50,
            width: 125,
            display: "inline-block",
            backgroundColor: "#018f75",
            color: "white"
          }}
        >
          Sound Charts
        </button>
      </Link>
    </OverlayTrigger>
    <OverlayTrigger
      placement={"top"}
      overlay={<Tooltip>View student reading levels</Tooltip>}
    >
      <Link to="/reading-level-charts/">
        <button
          style={{
            fontSize: 15,
            margin: 5,
            borderRadius: 5,
            padding: 5,
            height: 50,
            width: 125,
            display: "inline-block",
            backgroundColor: "#018f75",
            color: "white"
          }}
        >
          Reading Charts
        </button>
      </Link>
    </OverlayTrigger>
    <OverlayTrigger
      placement={"top"}
      overlay={<Tooltip>Add new student</Tooltip>}
    >
      <Link to="/add-student/">
        <button
          style={{
            fontSize: 15,
            margin: 5,
            borderRadius: 5,
            padding: 5,
            height: 50,
            width: 125,
            display: "inline-block",
            backgroundColor: "#018f75",
            color: "white"
          }}
        >
          Add Student
        </button>
      </Link>
    </OverlayTrigger>
  </div>
);
export default AllStudentsInstructions;
