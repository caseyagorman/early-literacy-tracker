import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const AssignItemsForm = props => (
  <form onSubmit={props.handleSubmit} id="add-to-student-form">
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>
        <h3 id="add-to-student-form">
          Assign {props.itemType} to {props.student.fname}
        </h3>
        <p>Press shift and click to add multiple {props.itemType} </p>
      </ControlLabel>
      <strong>
        <FormControl
          id="detail-form-control"
          componentClass="select"
          multiple
          value={props.value}
          onChange={props.handleChange}
        >
          {props.itemList.map(item => (
            <option key={item}>{item}</option>
          ))}
        </FormControl>
      </strong>
    </FormGroup>
    <button id="add-to-student-button" type="submit">
      Submit
    </button>
  </form>
);

export default AssignItemsForm;
