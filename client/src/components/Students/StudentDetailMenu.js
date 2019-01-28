import React from "react";
import "./static/students.css";
import { Link } from "react-router-dom";
import image from "./static/squiggly-line.png";
const StudentDetailMenu = props => (
  <div className="student-detail-menu">
    {" "}
    <div className="word-balloons-top">
      <div className="balloon" id="top-left">
        <br />
        <Link className="student-detail-menu-link" to={"/students"}>
          Test Words
        </Link>
        <img id="top-left-img" src={image} alt="squiggly-line" />
      </div>

      <div className="balloon" id="top-center">
        <br />
        <Link className="student-detail-menu-link" to={"/students"}>
          Test Letters
        </Link>
        <img id="top-center-img" src={image} alt="squiggly-line" />
      </div>

      <div className="balloon" id="top-right">
        <br />
        <Link className="student-detail-menu-link" to={"/students"}>
          Test Sounds
        </Link>
        <img id="top-right-img" src={image} alt="squiggly-line" />
      </div>
    </div>
    <div className="word-balloons-center">
      <div className="balloon" id="all-data">
        <br />
        <Link className="student-detail-menu-link" to={"/students"}>
          View All Data
        </Link>
        <img id="all-data-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="center-left">
        <Link className="student-detail-menu-link" to={"/students"}>
          Add Custom Words
        </Link>
        <img id="center-left-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="center-center">
        <Link className="student-detail-menu-link" to={"/students"}>
          Add Custom Letters
        </Link>
        <img id="center-center-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="center-right">
        <Link className="student-detail-menu-link" to={"/students"}>
          Add Custom Sounds
        </Link>
        <img id="center-right-img" src={image} alt="squiggly-line" />
      </div>
    </div>
    <div className="word-balloons-bottom">
      <div className="balloon" id="bottom-left">
        <Link className="student-detail-menu-link" to={"/students"}>
          View Word Data
        </Link>
        <img id="bottom-left-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="bottom-center">
        <Link className="student-detail-menu-link" to={"/students"}>
          View Letter Data
        </Link>
        <img id="bottom-center-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="bottom-right">
        <Link className="student-detail-menu-link" to={"/students"}>
          View Sound Data
        </Link>
        <img id="bottom-right-img" src={image} alt="squiggly-line" />
      </div>
    </div>
  </div>
);
export default StudentDetailMenu;
