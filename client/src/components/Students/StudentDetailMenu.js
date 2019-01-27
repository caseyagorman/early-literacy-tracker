import React from "react";
import "./static/students.css";
import image from "./static/squiggly-line.png";
const StudentDetailMenu = props => (
  <div className="student-detail-menu">
    {" "}
    <div className="word-balloons-top">
      <div className="balloon" id="top-left">
        <img id="top-left-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="top-center">
        <img id="top-center-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="top-right">
        <img id="top-right-img" src={image} alt="squiggly-line" />
      </div>
    </div>
    <div className="word-balloons-center">
      <div className="balloon" id="center-left">
        <img id="center-left-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="center-center">
        <img id="center-center-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="center-right">
        <img id="center-right-img" src={image} alt="squiggly-line" />
      </div>
    </div>
    <div className="word-balloons-bottom">
      <div className="balloon" id="bottom-left">
        <img id="bottom-left-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="bottom-center">
        <img id="bottom-center-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="bottom-right">
        <img id="bottom-right-img" src={image} alt="squiggly-line" />
      </div>
    </div>
  </div>
);
export default StudentDetailMenu;
