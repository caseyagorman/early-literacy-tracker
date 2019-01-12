import React from "react";
import MainButton from "../Buttons/MainButton";

const HomePage = props => (
  <div>
    <h1>Welcome {props.username}</h1>
    Getting started: Click view students to view list of students and see
    student details. Click view words to view list of words and see word
    details.
    <MainButton
      id="main-menu-students-button"
      name={"students"}
      route={`/students`}
    />
    <MainButton id="main-menu-words-button" name={"words"} route={`/words`} />
    ;
    <MainButton
      id="main-menu-letters-button"
      name={"letters"}
      route={`/letters`}
    />
    <MainButton
      id="main-menu-sounds-button"
      name={"sounds"}
      route={`/letters`}
    />
  </div>
);
export default HomePage;
