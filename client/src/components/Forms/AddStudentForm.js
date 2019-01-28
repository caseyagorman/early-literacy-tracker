import React from "react";
import { Form, FormGroup, FormControl } from "react-bootstrap";

const AddStudentForm = props => (
  <div className="container" id="add-students">
    <div className="add-students-instructions">
      <h2>Add Students</h2>
      <p className="add-students-instructions-paragraph">
        You may add multiple students at once. <br /> Enter each student name on
        new line.
        <br /> Press submit when finished entering student names.
      </p>
    </div>
    <Form onSubmit={props.handleSubmit}>
      <div className="container">
        <FormGroup controlId="formControlsTextarea">
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
