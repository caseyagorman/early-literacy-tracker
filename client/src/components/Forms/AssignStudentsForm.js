import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const AssignStudentsForm = props => (
  <form onSubmit={props.handleSubmit} id="assign-items-form">
    {console.log("assign students form props", props)}
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>
        {/* <h3>Assign students to {props.itemType}</h3>
        <p>Press shift and click to add multiple {props.itemType} </p>  */}
      </ControlLabel>
      <strong>
        <FormControl
          componentClass="select"
          multiple
          value={props.value}
          onChange={props.handleChange}
        >
          {props.studentList.map(student => (
            <option key={student}>{student}</option>
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
