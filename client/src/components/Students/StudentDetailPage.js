import React from "react";
import MainButton from "../Buttons/MainButton";
import StudentSnapshot from "./StudentSnapshot";
import DeleteStudent from "../../containers/Forms/DeleteStudent";
import StudentDetailTable from "../Tables/StudentDetailTable";
const StudentDetailPage = props => (
  <div className="student-detail-page">
    <div className="container">
      <div className="display-student-name">
        <h2>{props.student.student.name}</h2>
        <DeleteStudent student={props.student.student} />
      </div>
      <div>
        <MainButton
          id="view-student-word-data-button"
          text={"View Student Data Charts"}
          route={`/student-item-charts/${props.student.student.student_id}`}
          student={props.student}
        />
        <MainButton
          id="view-student-word-data-button"
          text={"View Past Word Test Results"}
          route={`/student-test-results/words/${
            props.student.student.student_id
          }/`}
        />
        <MainButton
          id="view-student-letter-data-button"
          text={"View Past Letter Test Results"}
          route={`/student-test-results/letters/${
            props.student.student.student_id
          }/`}
        />
        <MainButton
          id="view-student-word-data-button"
          text={"View Past Sound Test Results"}
          route={`/student-test-results/sounds/${
            props.student.student.student_id
          }/`}
        />
      </div>
      <div>
        <MainButton
          id="test-student-button"
          text={`Test ${props.student.student.name}'s Words`}
          route={`/test-student/${props.student.student.student_id}`}
          onClick={() => props.studentTestActions.beginTest("words")}
        />
        <MainButton
          id="test-student-button"
          text={`Test ${props.student.student.name}'s Letters`}
          route={`/test-student/${props.student.student.student_id}`}
          onClick={() => props.studentTestActions.beginTest("letters")}
        />
        <MainButton
          id="test-student-button"
          text={`Test ${props.student.student.name}'s Sounds`}
          route={`/test-student/${props.student.student.student_id}`}
          onClick={() => props.studentTestActions.beginTest("sounds")}
        />
      </div>

      <StudentDetailTable student={props.student} />

      <StudentSnapshot student={props.student} />
    </div>
  </div>
);

export default StudentDetailPage;
