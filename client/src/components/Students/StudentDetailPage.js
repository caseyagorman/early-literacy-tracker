import React from "react";
import MainButton from "../Buttons/MainButton";
import StudentSnapshot from "./StudentSnapshot";
import AssignItemForm from "../Forms/AssignItemForm";
const StudentDetailPage = props => (
  <div className="student-detail-page">
    <div className="display-student-name">
      {props.fname}
      <span />
      {props.lname}
    </div>
    <MainButton
      id="view-student-word-data-button"
      text={"View Word Data"}
      route={`/word-data${props.id}`}
    />
    <MainButton
      id="view-student-letter-data-button"
      text={"View Letter Data"}
      route={`/letter-data${props.id}`}
    />
    <MainButton
      id="view-student-sound-data-button"
      text={"View Sound Data"}
      route={`/sound-data${props.id}`}
    />
    <MainButton
      id="view-student-data-button"
      text={"View All Student Data"}
      route={`/student-data${props.id}`}
    />

    <StudentSnapshot />

    <AssignItemForm />
    <AssignItemForm />
    <AssignItemForm />

    <MainButton
      id="test-student-words-button"
      text={"Test Student Words"}
      testType={"words"}
      route={`/test-student${props.id}`}
    />
    <MainButton
      id="test-student-words-button"
      text={"Test Student Letters"}
      testType={"letters"}
      route={`/test-student${props.id}`}
    />
    <MainButton
      id="test-student-words-button"
      text={"Test Student Sounds"}
      testType={"sounds"}
      route={`/test-student${props.id}`}
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
