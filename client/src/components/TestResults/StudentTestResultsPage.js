import React from "react";
import TableContainer from "../../containers/Tables/TableContainer";
import StudentItemLineChart from "../../containers/Charts/StudentItemLineChart";

const StudentTestResultsPage = props => (
  <div style={{ fontFamily: "krub" }}>
    <h2>
      {" "}
      {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1)} Test
      Results
    </h2>
    <TableContainer
      renderTable={props.CorrectCountsTable}
      tableElements={props.correctCountsTableElements}
      itemType={props.itemType}
    />
    <TableContainer
      renderTable={props.TestResultsTable}
      tableElements={props.testResultsTableElements}
      itemType={props.itemType}
    />
  </div>
);

export default StudentTestResultsPage;
