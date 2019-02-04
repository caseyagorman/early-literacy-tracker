import React from "react";
import "./static/form.css";
const AddItemsForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className="container" style={{ fontFamily: "krub" }}>
      <label>
        <h3>
          Add New to{" "}
          {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1)} to{" "}
          {props.student}
        </h3>
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
      <button
        style={{
          borderRadius: 3,
          width: 90,
          color: "white",
          backgroundColor: "#018f75"
        }}
      >
        Add {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1)}
      </button>
    </div>
  </form>
);
export default AddItemsForm;
