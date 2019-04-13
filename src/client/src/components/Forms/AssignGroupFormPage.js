import React from "react";
import DeleteGroup from "../../containers/Forms/DeleteGroup";
import { Link } from "react-router-dom";
const AssignGroupFormPage = props => (
  <div style={{ fontFamily: "krub", display: "inline-block" }}>
    <br />
    <Link
      style={{ fontSize: 24, display: "inline-block", color: "#018f75" }}
      to={{
        pathname: `/group-detail/${props.group.name}`
      }}
    >
      {props.group.name}
    </Link>
    <DeleteGroup group={props.group.name} />
    <br />
    <div style={{ height: props.maxGroupLength }}>
      Current members:
      <br />
      <ul>
        {props.group.students.map(student => (
          <li
            key={"liGroupForm" + student}
            style={{ fontSize: 16, listStyle: "none" }}
          >
            {student}
          </li>
        ))}
      </ul>
    </div>
    <br />
    <form
      onSubmit={props.handleSubmit}
      style={{ width: 250, fontFamily: "krub" }}
    >
      <label id="form-label" />
      <br />
      <select
        style={{
          fontSize: 16,
          width: 200,
          minHeight: 500
        }}
        onChange={props.handleChange}
        multiple="true "
        value={props.value}
      >
        {props.studentList.map(student => (
          <option key={"optionGroupForm" + student.name}>{student.name}</option>
        ))}
      </select>
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
  </div>
);

export default AssignGroupFormPage;
