import React from "react";
import GroupTable from "../Tables/GroupTable";
import TableContainer from "../../containers/Tables/TableContainer";
const GroupDetailPage = props => (
  <div className="container" style={{ fontFamily: "krub" }}>
    <h1>{props.group.name}</h1>
    <ul>
      {Object.entries(props.group.readingLevels).map(student => (
        <li style={{ fontColor: "black", fontSize: 24 }}>
          {student[0]}, level {student[1]}
        </li>
      ))}
    </ul>
    <br />
    <GroupTable group={props.group} />
  </div>
);
export default GroupDetailPage;