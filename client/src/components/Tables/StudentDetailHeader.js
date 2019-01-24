import React from "react";
import { Link } from "react-router-dom";
const StudentDetailHeader = student => (
  <div>
    <button className="student-detail-button-students">
      <Link
        to={`/student-item-charts/${student.student.student.student_id}`}
        className="link"
        student={student.student}
      >
        View data charts
      </Link>
    </button>
    <button className="student-detail-button-words">
      <Link
        to={`/student-test-results/words/${student.student.student.student_id}`}
        className="link"
      >
        View past word tests
      </Link>
    </button>
    <button className="student-detail-button-letters">
      <Link
        to={`/student-test-results/letters/${
          student.student.student.student_id
        }`}
        className="link"
      >
        View past letter tests
      </Link>
    </button>
    <button className="student-detail-button-sounds">
      <Link
        to={`/student-test-results/sounds/${
          student.student.student.student_id
        }`}
        className="link"
      >
        View past sound tests
      </Link>
    </button>
    <br />

    <button className="student-detail-button-students">
      <a href="/students" className="link">
        View students
      </a>
    </button>
    <button className="student-detail-button-words">
      <a href="/add-items/words" className="link">
        Add new words
      </a>
    </button>
    <button className="student-detail-button-letters">
      <a href="/add-items/letters" className="link">
        Add new letters
      </a>
    </button>
    <button className="student-detail-button-sounds">
      <a href="/add-items/sounds" className="link">
        Add new sounds
      </a>
    </button>
  </div>
);
export default StudentDetailHeader;
