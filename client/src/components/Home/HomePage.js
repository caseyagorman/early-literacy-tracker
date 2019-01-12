import React from "react";
import MainMenuButton from "./MainMenuButton";

const HomePage = props => (
  <div>
    <h1>Welcome {props.username}</h1>
    Getting started: Click view students to view list of students and see
    student details. Click view words to view list of words and see word
    details.
  </div>
);
// {/* <MainMenuButton name={"students"} route={`/students`} /> */}
// {/* <MainMenuButton name={"words"} route={`/words`} />; */}
// {/* <MainMenuButton name={"letters"} route={`/letters`} /> */}
// {/* <MainMenuButton name={"letters"} route={`/letters`} /> */} */}

export default HomePage;
