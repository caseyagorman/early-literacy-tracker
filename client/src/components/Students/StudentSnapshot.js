import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
const StudentSnapshot = props => (
  <div style={{ fontSize: 18 }}>
    <OverlayTrigger
      placement={"top"}
      overlay={
        <Tooltip>
          View {props.student.student.name.split(" ")[0]}'s group
        </Tooltip>
      }
    >
      <Link to={`/group-detail/${props.student.group}`}>
        {props.groupSentence}
      </Link>
    </OverlayTrigger>
    <br />
    {props.readingSentence}
    <br />
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
    {props.testSentences[2]}
    <br />
    {props.testSentences[1]}
    <br />
    {props.testSentences[0]}
    <br />
    <br />
  </div>
);

export default StudentSnapshot;
