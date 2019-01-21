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
      text={"View Students"}
      route={`/students`}
    />
    <MainButton
      id="main-menu-words-button"
      text={"View Words"}
      route={`/items/words`}
    />
    ;
    <MainButton
      id="main-menu-letters-button"
      text={"View Letters"}
      route={`/items/letters`}
    />
    <MainButton
      id="main-menu-sounds-button"
      text={"View Sounds"}
      route={`/items/sounds`}
    />
  </div>
);
export default HomePage;
