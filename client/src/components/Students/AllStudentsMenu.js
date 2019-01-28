import React from "react";
import "./static/students.css";
import { Link } from "react-router-dom";
import image from "./static/squiggly-line.png";
const AllStudentsMenu = props => (
  <div className="all-students-menu">
    {" "}
    <div className="word-balloons-center">
      <div className="all-students-balloon" id="all-students-center-left">
        <Link className="student-detail-menu-link" to={"/students"}>
          <br />
          Add New Words
        </Link>
        <img
          id="all-students-center-left-img"
          src={image}
          alt="squiggly-line"
        />
      </div>
      <div className="all-students-balloon" id="all-students-center-center">
        <Link className="student-detail-menu-link" to={"/students"}>
          <br />
          Add New Letters
        </Link>
        <img
          id="all-students-center-center-img"
          src={image}
          alt="squiggly-line"
        />
      </div>
      <div className="all-students-balloon" id="all-students-center-right">
        <Link className="student-detail-menu-link" to={"/students"}>
          <br />
          Add New Sounds
        </Link>
        <img
          id="all-students-center-right-img"
          src={image}
          alt="squiggly-line"
        />
      </div>
    </div>
    <div className="word-balloons-bottom">
      <div className="all-students-balloon" id="all-students-bottom-left">
        <Link className="student-detail-menu-link" to={"/students"}>
          View
          <br /> Word
          <br /> Data
        </Link>
        <img
          id="all-students-bottom-left-img"
          src={image}
          alt="squiggly-line"
        />
      </div>
      <div className="all-students-balloon" id="all-students-bottom-center">
        <Link className="student-detail-menu-link" to={"/students"}>
          View <br />
          Letter
          <br /> Data
        </Link>
        <img
          id="all-students-bottom-center-img"
          src={image}
          alt="squiggly-line"
        />
      </div>
      <div className="all-students-balloon" id="all-students-bottom-right">
        <Link className="student-detail-menu-link" to={"/students"}>
          View Sound Data
        </Link>
        <img
          id="all-students-bottom-right-img"
          src={image}
          alt="squiggly-line"
        />
      </div>
    </div>
  </div>
);
export default AllStudentsMenu;
