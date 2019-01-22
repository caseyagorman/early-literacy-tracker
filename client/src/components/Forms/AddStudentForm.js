import React from "react";
import { Form, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const AddStudentForm = props => (
  <div className="container">
    <h4>
      You may add multiple students at once. <br /> Enter each student name on
      new line.
      <br /> Press submit when finished entering student names.
    </h4>
    <Form onSubmit={props.handleSubmit}>
      <div className="container">
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Add Students</ControlLabel>
          <FormControl
            name="names"
            componentClass="textarea"
            placeholder="add names"
            value={props.value}
            onChange={props.handleChange}
          />
        </FormGroup>
      </div>
      <br />

      <button id="add-student-button">Add students</button>
    </Form>
  </div>
);

export default AddStudentForm;
