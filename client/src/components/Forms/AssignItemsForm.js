import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const AssignItemsForm = props => (
  <form onSubmit={props.handleSubmit} id="assign-items-form">
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>
        <h3>
          Assign {props.itemType} to {props.student.name}
        </h3>
        <p>Press shift and click to add multiple {props.itemType} </p>
      </ControlLabel>
      <strong>
        <FormControl
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
