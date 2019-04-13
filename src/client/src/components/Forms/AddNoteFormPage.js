import React from "react";
import { Form, FormGroup, FormControl } from "react-bootstrap";
const AddNoteFormPage = props => (
  <Form
    style={{ fontFamily: "krub", fontSize: 14 }}
    onSubmit={props.handleSubmit}
  >
    <label>
      <p>Add New Note</p>
    </label>
    <br />
    <FormGroup controlId="formControlsTextarea">
      <FormControl
        name="note"
        type="textarea"
        value={props.value}
        onChange={props.handleChange}
        placeholder="add group notes"
      />
    </FormGroup>

    <button
      style={{
        width: 90,
        backgroundColor: "#018f75",
        color: "white",
        borderRadius: 4
      }}
    >
      Add Note
    </button>
  </Form>
);
export default AddNoteFormPage;
