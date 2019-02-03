import React from "react";
import DeleteGroup from "../../containers/Forms/DeleteGroup";

const AssignGroupFormPage = props => (
  <div style={{ fontFamily: "krub" }}>
    <div>
      <h1>{props.group}</h1>
      <DeleteGroup group={props.group} />
    </div>
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
  </div>
);

export default AssignGroupFormPage;
