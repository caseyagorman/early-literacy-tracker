import React from "react";

const StudentSnapshot = props => (
  <div className="student-snapshot">
    {props.student.student.name.split(" ")[0]} knows
    <b>
      {" "}
      {props.student.wordCount}/{props.student.totalWordCount}
    </b>{" "}
    words,
    <b>
      {" "}
      {props.student.letterCount}/{props.student.totalLetterCount}
    </b>{" "}
    letters, and{" "}
    <b>
      {props.student.soundCount}/{props.student.totalSoundCount}
    </b>{" "}
    sounds. <br />
    <div id="student-detail-sentences">
      {props.testSentences[2]}
      <br />
      {props.testSentences[1]}
      <br />
      {props.testSentences[0]}
      <br />
      <br />
    </div>
  </div>
);

export default StudentSnapshot;
