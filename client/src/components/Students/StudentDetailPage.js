import React from "react";
import MainButton from "../Buttons/MainButton";
import StudentSnapshot from "./StudentSnapshot";
import AssignItems from "../../containers/Forms/AssignItems";
const StudentDetailPage = props => (
  <div className="student-detail-page">
    {console.log("student detail", props)}
    <div className="display-student-name">
      {props.student[0].fname}
      <span />
      {props.student[0].lname}
    </div>
    <MainButton
      id="view-student-word-data-button"
      text={"View Word Data"}
      route={`/word-data${props.student[0].student_id}`}
    />
    <MainButton
      id="view-student-letter-data-button"
      text={"View Letter Data"}
      route={`/letter-data${props.student[0].student_id}`}
    />
    <MainButton
      id="view-student-sound-data-button"
      text={"View Sound Data"}
      route={`/sound-data${props.student[0].student_id}`}
    />
    <MainButton
      id="view-student-data-button"
      text={"View All Student Data"}
      route={`/student-data${props.student[0].student_id}`}
    />

    <StudentSnapshot />

    <AssignItems student={props.student} />
    <AssignItems student={props.student} />
    <AssignItems student={props.student} />

    <MainButton
      id="test-student-button"
      text={"Test Student Words"}
      testType={"words"}
      route={`/test-student${props.student[0].student_id}`}
    />
    <MainButton
      id="test-student-button"
      text={"Test Student Letters"}
      testType={"letters"}
      route={`/test-student${props.student[0].student_id}`}
    />
    <MainButton
      id="test-student-button"
      text={"Test Student Sounds"}
      testType={"sounds"}
      onClick={props.beginTest}
      route={`/test-student${props.student[0].student_id}`}
    />
  </div>
);

// import StudentSnapshot from "./StudentSnapshot";
// Display student Name
// Link - word data
// Link - letter data
// link - sound data
// Link -view all data on one page

// Display snapshot of what student is learning

// Just list of words student is learning
// Assign word, letter, sound to student form

// Test student button

export default StudentDetailPage;
