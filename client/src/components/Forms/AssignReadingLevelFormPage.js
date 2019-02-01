import React from "react";
import "./static/form.css";

// TODO TURN INTO SINGLE SELECT CHECK BOX,
// THIS SHOULD NOT BE MULTI SELECT
const AssignReadingLevelFormPage = props => (
  <form onSubmit={props.handleSubmit} className="assign-items-form">
    <label id="form-label">
      <b>{props.listTitle}</b>
    </label>
    <br />
    {props.itemList.map(item => (
      <input
        className="assign-reading-level"
        onChange={props.handleChange}
        value={props.value}
        type="radio"
      >
        {" "}
        {item}{" "}
      </input>
    ))}

    <br />
    <button id="add-to-student-button" type="submit">
      Submit
    </button>
  </form>
);

export default AssignReadingLevelFormPage;
