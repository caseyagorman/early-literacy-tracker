import React from "react";
import "./static/form.css";
const AddItemsForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className="container">
      <label>
        <h4>
          Add New{" "}
          {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1)}:
        </h4>
        <p>You may add multiple {props.itemType} separated by space</p>
      </label>
      <br />
      <input
        name="newItem"
        type="text"
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
    <br />
    <div className="container">
      <button id="add-item-button">
        Add {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1)}
      </button>
    </div>
  </form>
);
export default AddItemsForm;
