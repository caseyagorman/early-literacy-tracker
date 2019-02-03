import React from "react";
import "./static/form.css";

const AssignGroupFormPage = props => (
  <form
    onSubmit={props.handleSubmit}
    style={{ float: "left", width: 250, fontFamily: "krub" }}
  >
    <label id="form-label" />
    <br />
    <select
      style={{
        fontSize: 18,
        verticalAlign: "bottom",
        width: 200,
        minHeight: 500
      }}
      onChange={props.handleChange}
      multiple="true "
      value={props.value}
    >
      {props.studentList[0].map(student => (
        <option key={student}>{student.name}</option>
      ))}
    </select>
    <input name="groupName" onChange={props.handleInputChange} type="text" />
    <br />
    <button
      style={{
        marginTop: 10,
        backgroundColor: "#018f75",
        color: "white",
        fontSize: 18,
        padding: 10,
        marginLeft: 10,
        borderRadius: 4
      }}
      type="submit"
    >
      Submit
    </button>
  </form>
);

export default AssignGroupFormPage;
