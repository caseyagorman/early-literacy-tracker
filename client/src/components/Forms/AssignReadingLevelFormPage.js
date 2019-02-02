import React from "react";
import "./static/form.css";
const AssignReadingLevelFormPage = props => (
  <form onSubmit={props.handleSubmit} className="assign-items-form">
    <label id="form-label">
      <b>{props.listTitle}</b>
    </label>
    <br />
    <select
      className="assign-reading-level"
      onChange={props.handleChange}
      value={props.value}
    >
      {props.itemList.map(item => (
        <option key={item}>{item}</option>
      ))}
    </select>

    <br />
    <button id="add-to-student-button" type="submit">
      Submit
    </button>
  </form>
);

export default AssignReadingLevelFormPage;
