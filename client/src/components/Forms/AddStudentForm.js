import React from "react";

const AddStudentForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className="container">
      <label>
        <h4>Add New Student</h4>
      </label>

      <label>First name</label>
      <input
        name="fname"
        type="text"
        value={props.value}
        onChange={props.handleChange}
      />

      <label>Last name</label>
      <input
        name="lname"
        type="text"
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
    <br />
    <div className="container">
      <button id="add-student-button">Add student</button>
    </div>
  </form>
);

export default AddStudentForm;
