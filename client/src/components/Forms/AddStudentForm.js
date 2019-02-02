import React from "react";
import { Form, FormGroup, FormControl } from "react-bootstrap";

const AddStudentForm = props => (
  <div className="container" style={{ fontFamily: "Krub" }}>
    <div>
      <h1>Add Students</h1>
      <p style={{ fontSize: 18 }}>
        You may add multiple students at once. <br /> Enter each student name on
        new line.
      </p>
    </div>
    <div style={{ marginTop: 10, marginLeft: -15 }}>
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

        <button
          style={{
            backgroundColor: "#018f75",
            color: "white",
            padding: 10,
            marginLeft: 15,
            borderRadius: 4
          }}
        >
          Add students
        </button>
      </Form>
    </div>
  </div>
);

export default AddStudentForm;
