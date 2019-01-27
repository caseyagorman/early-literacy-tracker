import React from "react";
import MainButton from "../Buttons/MainButton";
import StudentSnapshot from "./StudentSnapshot";
import DeleteStudent from "../../containers/Forms/DeleteStudent";
import StudentDetailTable from "../Tables/StudentDetailTable";
import StudentDetailHeader from "./StudentDetailHeader";
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
        <br />
        <br />
      </div>
      <StudentSnapshot
        student={props.student}
        tests={props.tests}
        testSentences={props.testSentences}
      />
      <StudentDetailHeader student={props.student} />

      <div>
        <MainButton
          title="Click to see all charts and test results on single page"
          id="student-button"
          text={`View all data`}
          route={`/test-student/words/${props.student.student.student_id}`}
        >
          View all data on one page
        </MainButton>
        <MainButton
          title="Click to start student word test"
          id="test-student-word-button"
          text={`Test Words`}
          route={`/test-student/words/${props.student.student.student_id}`}
          onClick={() => props.studentTestActions.beginTest("words")}
        />
        <span />
        <span />
        <MainButton
          title="Click to start student letter test"
          id="test-student-letter-button"
          text={`Test Letters`}
          route={`/test-student/letters/${props.student.student.student_id}`}
          onClick={() => props.studentTestActions.beginTest("letters")}
        />
        <span />
        <span />
        <MainButton
          title="Click to start student sound test"
          id="test-student-sound-button"
          text={`Test Sounds`}
          route={`/test-student/sounds/${props.student.student.student_id}`}
          onClick={() => props.studentTestActions.beginTest("sounds")}
        />
      </div>
      <br />
      <br />

      <StudentDetailTable student={props.student} />
    </div>
  </div>
);

export default StudentDetailPage;
