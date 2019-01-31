import React from "react";
import StudentSnapshot from "./StudentSnapshot";
import DeleteStudent from "../../containers/Forms/DeleteStudent";
import StudentDetailTable from "../Tables/StudentDetailTable";
import StudentDetailMenu from "./StudentDetailMenu";
import "./static/students.css";
const StudentDetailPage = props => (
  <div className="students">
    <div className="container">
      <div className="display-student-name">
        <b id="student-name">{props.student.student.name}</b>
        <DeleteStudent
          student={props.student.student.student_id}
          id="delete-student-detail"
        />
        {/* <StudentDetailMenu
        // student={props.student}
        // studentTestActions={props.studentTestActions}
        /> */}
      </div>
      <StudentSnapshot
        student={props.student}
        tests={props.tests}
        testSentences={props.testSentences}
      />
      <br />
      <br />

      <StudentDetailTable student={props.student} />
    </div>
  </div>
);

export default StudentDetailPage;
