import React from "react";
import { Link } from "react-router-dom";
const StudentDetailHeader = student => (
  <div>
    <button
      className="student-detail-button-students"
      title="Click to view all student data on single page"
    >
      <Link
        to={`/student-item-charts/${student.student.student.student_id}`}
        className="table-link"
        student={student.student}
      >
        View all data
      </Link>
    </button>
    <button
      className="student-detail-button-words"
      title="Click to view all previous word tests"
    >
      <Link
        to={`/student-test-results/words/${student.student.student.student_id}`}
        className="table-link"
        student={student.student}
      >
        Word test history
      </Link>
    </button>
    <button
      className="student-detail-button-letters"
      title="Click to view all previous letter tests"
    >
      <Link
        to={`/student-test-results/letters/${
          student.student.student.student_id
        }`}
        student={student.student}
        className="table-link"
      >
        Letter test history
      </Link>
    </button>
    <button
      className="student-detail-button-sounds"
      title="Click to view all previous sound tests"
    >
      <Link
        to={`/student-test-results/sounds/${
          student.student.student.student_id
        }`}
        student={student.student}
        className="table-link"
      >
        Sound test history
      </Link>
    </button>
    <br />

    <button
      className="student-detail-button-students"
      title="Click to view all students"
    >
      <a href="/students" className="table-link">
        View students
      </a>
    </button>
    <button
      className="student-detail-button-words"
      title="Click to add new words"
    >
      <a href="/add-items/words" className="table-link">
        Add new words
      </a>
    </button>
    <button
      className="student-detail-button-letters"
      title="Click to add new letters"
    >
      <a href="/add-items/letters" className="table-link">
        Add new letters
      </a>
    </button>
    <button
      className="student-detail-button-sounds"
      title="Click to add new sounds"
    >
      <a href="/add-items/sounds" className="table-link">
        Add new sounds
      </a>
    </button>
  </div>
);
export default StudentDetailHeader;
