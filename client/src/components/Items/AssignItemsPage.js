import React from "react";

const AssignItemsPage = props => (
  <div className="assign-items-page">
    <h2>
      {" "}
      <b>Assign {props.itemType} to all students</b>
    </h2>
    <br />
    <p>
      {" "}
      Hold down shift to select multiple adjacent {props.itemType}. Hold down
      command (mac) control (PC) <br />
      to select multiple non-adjacent {props.itemType}.{" "}
      {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1)} will be
      added to all students. If you would like
      <br /> to add students to individual students go to student's detail page
      and select "add custom {props.itemType}."
    </p>
    <br />
    <br />
  </div>
);

export default AssignItemsPage;
