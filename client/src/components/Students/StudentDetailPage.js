import React from "react";
import MainButton from "../Buttons/MainButton";
import StudentSnapshot from "./StudentSnapshot";
// import AssignItems from "../../containers/Forms/AssignItems";
import BasicTablePage from "../Tables/BasicTablePage";
import DeleteStudent from "../../containers/Forms/DeleteStudent";
import StudentDetailTable from "../Tables/StudentDetailTable";
const StudentDetailPage = props => (
  <div className="student-detail-page">
    <div className="container">
      <div className="display-student-name">
        <h2>
          {props.student.student.fname}
          {"  "}
          {props.student.student.lname}
        </h2>
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
          text={"View Word Past Test Results"}
          route={`/student-test-results/words/${
            props.student.student.student_id
          }/`}
        />
        <MainButton
          id="view-student-letter-data-button"
          text={"View Letter Charts"}
          route={`/student-test-results/letters/${
            props.student.student.student_id
          }/`}
        />
        <MainButton
          id="view-student-word-data-button"
          text={"View Letter Past Test Results"}
          route={`/student-test-results/sounds/${
            props.student.student.student_id
          }/`}
        />
      </div>
      <div>
        <MainButton
          id="test-student-button"
          text={"Test Student Words"}
          route={`/test-student/${props.student.student.student_id}`}
          onClick={() => props.studentTestActions.beginTest("words")}
        />
        <MainButton
          id="test-student-button"
          text={"Test Student sLetters"}
          route={`/test-student/${props.student.student.student_id}`}
          onClick={() => props.studentTestActions.beginTest("letters")}
        />
        <MainButton
          id="test-student-button"
          text={"Test Student Sounds"}
          route={`/test-student/${props.student.student.student_id}`}
          onClick={() => props.studentTestActions.beginTest("sounds")}
        />
      </div>

      <StudentDetailTable
        // token={props.token}

        student={props.student}
      />
      {/* <BasicTablePage
      itemType={"unlearned words"}
      items={props.student.unlearnedWordList}
    />
    <BasicTablePage itemType={"learned words"} items={props.student.wordList} />
    <BasicTablePage
      itemType={"unlearned letters"}
      items={props.student.unlearnedLetterList}
    />
    <BasicTablePage
      itemType={"learned letters"}
      items={props.student.letterList}
    />
    <BasicTablePage
      itemType={"unlearned sounds"}
      items={props.student.unlearnedSoundList}
    />
    <BasicTablePage
      itemType={"learned sounds"}
      items={props.student.soundList}
    /> */}
      <StudentSnapshot student={props.student} />
    </div>
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
