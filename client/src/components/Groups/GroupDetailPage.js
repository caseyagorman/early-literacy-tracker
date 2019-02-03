import React from "react";
const GroupDetailPage = props => (
  <div style={{ fontFamily: "krub" }}>
    <h1>{props.group.groupName}</h1>
    <ul>
      {props.group.students.map(student => (
        <li style={{ fontColor: "black", fontSize: 24 }}>{student}</li>
      ))}
    </ul>
  </div>
);
export default GroupDetailPage;
