import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const AssignStudentsForm = props => (
  <form onSubmit={props.handleSubmit} id="assign-items-form">
    {console.log("assign students form props", props.studentList)}
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>
        <h3>Assign students to "{props.item}"</h3>
        <p>Press shift and click to add multiple students </p>
      </ControlLabel>
      <strong>
        <FormControl
          componentClass="select"
          multiple
          value={props.value}
          onChange={props.handleChange}
        >
          {props.studentList.map(student => (
            <option>{student.student}</option>
          ))}
        </FormControl>
      </strong>
    </FormGroup>
    <button id="add-to-student-button" type="submit">
      Submit
    </button>
  </form>
);

export default AssignStudentsForm;
