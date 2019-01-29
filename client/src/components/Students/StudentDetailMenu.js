import React from "react";
import "./static/students.css";
import { Link } from "react-router-dom";
import image from "./static/squiggly-line.png";
const StudentDetailMenu = props => (
  <div className="student-detail-menu">
    <div className="word-balloons-top">
      <div className="balloon" id="top-left">
        <br />
        <Link
          className="student-detail-menu-link"
          to={`/test-student/words/${props.student.student.student_id}`}
          onClick={() => props.studentTestActions.beginTest("words")}
        >
          Test Words
        </Link>
        <img id="top-left-img" src={image} alt="squiggly-line" />
      </div>

      <div className="balloon" id="top-center">
        <br />
        <Link
          className="student-detail-menu-link"
          to={`/test-student/letters/${props.student.student.student_id}`}
          onClick={() => props.studentTestActions.beginTest("letters")}
        >
          Test Letters
        </Link>
        <img id="top-center-img" src={image} alt="squiggly-line" />
      </div>

      <div className="balloon" id="top-right">
        <br />
        <Link
          className="student-detail-menu-link"
          to={`/test-student/sounds/${props.student.student.student_id}`}
          onClick={() => props.studentTestActions.beginTest("sounds")}
        >
          Test Sounds
        </Link>
        <img id="top-right-img" src={image} alt="squiggly-line" />
      </div>
    </div>
    <div className="word-balloons-center">
      <div className="balloon" id="all-data">
        <br />
        <Link
          className="student-detail-menu-link"
          to={`/student-item-charts/${props.student.student.student_id}`}
        >
          View All Data
        </Link>
        <img id="all-data-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="center-left">
        <Link
          className="student-detail-menu-link"
          to={`/add-custom-items/${props.student.student.student_id}/words`}
        >
          Add Custom Words
        </Link>
        <img id="center-left-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="center-center">
        <Link
          className="student-detail-menu-link"
          to={`/add-custom-items/${props.student.student.student_id}/letters`}
        >
          Add Custom Letters
        </Link>
        <img id="center-center-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="center-right">
        <Link
          className="student-detail-menu-link"
          to={`/add-custom-items/${props.student.student.student_id}/sounds`}
        >
          Add Custom Sounds
        </Link>
        <img id="center-right-img" src={image} alt="squiggly-line" />
      </div>
    </div>
    <div className="word-balloons-bottom">
      <div className="balloon" id="bottom-left">
        <Link
          className="student-detail-menu-link"
          to={`/student-test-results/words/${props.student.student.student_id}`}
        >
          Word Test Results
        </Link>
        <img id="bottom-left-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="bottom-center">
        <Link
          className="student-detail-menu-link"
          to={`/student-test-results/letters/${
            props.student.student.student_id
          }`}
        >
          Letter Test Results
        </Link>
        <img id="bottom-center-img" src={image} alt="squiggly-line" />
      </div>
      <div className="balloon" id="bottom-right">
        <Link
          className="student-detail-menu-link"
          to={`/student-test-results/sounds/${
            props.student.student.student_id
          }`}
        >
          Sound Test Results
        </Link>
        <img id="bottom-right-img" src={image} alt="squiggly-line" />
      </div>
    </div>
  </div>
);
export default StudentDetailMenu;
