import React from "react";
import { Form, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const AddStudentForm = props => (
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
    <div className="container">
      <button id="add-student-button">Add students</button>
    </div>
  </Form>
);

export default AddStudentForm;
