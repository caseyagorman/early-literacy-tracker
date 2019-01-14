import React from "react";
const AddItemsForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className="container">
      <label>
        <h4>Add New {props.type.toUpperCase()}:</h4>
        <p>You may add multiple {props.type}s separated by space</p>
      </label>
      <input
        name="newItem"
        type="text"
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
    <br />
    <div className="container">
      <button id="add-word-button">Add {props.type.toUpperCase()}</button>
    </div>
  </form>
);
export default AddItemsForm;
