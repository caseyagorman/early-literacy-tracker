import React from "react";
import "./static/form.css";

const AssignItemsFormPage = props => (
  <form onSubmit={props.handleSubmit} className="assign-items-form">
    <label id="form-label">
      <b>{props.listTitle}</b>
    </label>
    <br />
    <select
      className="assign-items-select"
      onChange={props.handleChange}
      multiple="true "
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

export default AssignItemsFormPage;
