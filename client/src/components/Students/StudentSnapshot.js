import React from "react";

const StudentSnapshot = props => (
  <div className="student-snapshot">
    {props.student.student.name} knows {props.student.wordCount}/
    {props.student.totalWordCount} words, {props.student.letterCount}/
    {props.student.totalLetterCount} letters, and {props.student.soundCount}/
    {props.student.totalSoundCount} sounds. <br />
    {props.testSentences[2]}
    <br />
    {props.testSentences[1]}
    <br />
    {props.testSentences[0]}
    <br />
    <br />
    To view more detailed test data, click the links below.
    <br />
    <br />
  </div>
);

export default StudentSnapshot;
