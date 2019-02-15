import React from "react";
import TableContainer from "../../containers/Tables/TableContainer";

const StudentTestResultsPage = props => (
  <div style={{ fontFamily: "krub" }}>
    <h2 style={{ textAlign: "center" }}>
      {" "}
      {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1)} Test
      Results
    </h2>
    <br />
    <br />
    <TableContainer
      renderTable={props.CorrectCountsTable}
      tableElements={props.correctCountsTableElements}
      itemType={props.itemType}
    />
    <br />
    <TableContainer
      renderTable={props.TestResultsTable}
      tableElements={props.testResultsTableElements}
      itemType={props.itemType}
    />
  </div>
);

export default StudentTestResultsPage;
