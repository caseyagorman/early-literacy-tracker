import React from "react";

const StudentTestResultsPage = props => (
  <h2>
    {" "}
    {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1)} Test
    Results
  </h2>
);

export default StudentTestResultsPage;
