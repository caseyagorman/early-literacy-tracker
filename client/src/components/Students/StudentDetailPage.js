import React from "react";
import StudentSnapshot from "./StudentSnapshot";
import DeleteStudent from "../../containers/Forms/DeleteStudent";
import StudentDetailTable from "../Tables/StudentDetailTable";
import ClassAverageChart from "../../containers/Charts/ClassAverageChart";
import { Link } from "react-router-dom";
import DropdownBar from "./DropdownBar";
import "./static/students.css";
const StudentDetailPage = props => (
  <div className="students">
    {console.log("student props", props)}
    <div className="container">
      <div className="display-student-name">
        <b id="student-name">{props.student.student.name}</b>
        <DeleteStudent
          student={props.student.student.student_id}
          id="delete-student-detail"
        />
      </div>
      <StudentSnapshot
        student={props.student}
        tests={props.tests}
        testSentences={props.testSentences}
      />
      <br />

      <ClassAverageChart student={props.student} students={props.students} />
      <div className="dropdown-bar-div">
        <DropdownBar
          actionType={"Test Student"}
          wordAction={
            <Link
              to={`/test-student/words/${props.student.student.student_id}`}
              onClick={() => props.studentTestActions.beginTest("words")}
            >
              Test Words
            </Link>
          }
          letterAction={
            <Link
              to={`/test-student/letters/${props.student.student.student_id}`}
              onClick={() => props.studentTestActions.beginTest("letters")}
            >
              Test Words
            </Link>
          }
          soundAction={
            <Link
              to={`/test-student/sounds/${props.student.student.student_id}`}
              onClick={() => props.studentTestActions.beginTest("sounds")}
            >
              Test Words
            </Link>
          }
        />

        <DropdownBar
          actionType={"Add"}
          wordAction={
            <Link
              to={`/add-custom-items/${props.student.student.student_id}/words`}
            >
              Add Words
            </Link>
          }
          letterAction={
            <Link
              to={`/add-custom-items/${
                props.student.student.student_id
              }/letters`}
            >
              Add Letters
            </Link>
          }
          soundAction={
            <Link
              to={`/add-custom-items/${
                props.student.student.student_id
              }/sounds`}
            >
              Add Sounds
            </Link>
          }
        />

        <DropdownBar
          actionType={"Test Results"}
          wordAction={
            <Link
              to={`/student-test-results/words/${
                props.student.student.student_id
              }`}
            >
              Word Test Results
            </Link>
          }
          letterAction={
            <Link
              to={`/student-test-results/letters/${
                props.student.student.student_id
              }`}
            >
              Letter Test Results
            </Link>
          }
          soundAction={
            <Link
              to={`/student-test-results/sounds/${
                props.student.student.student_id
              }`}
            >
              Sound Test Results
            </Link>
          }
        />
      </div>
      <br />
      <br />

      <StudentDetailTable student={props.student} />
    </div>
  </div>
);

export default StudentDetailPage;
