import React from "react";
import "./static/form.css";
const AssignReadingLevelFormPage = props => (
  <form onSubmit={props.handleSubmit} style={{ fontFamily: "krub" }}>
    <label id="form-label">
      <b>{props.listTitle}</b>
    </label>
    <br />
    <select
      style={{
        textAlign: "center",
        backgroundColor: "white",
        height: 30,
        width: 180
      }}
      className="assign-reading-level"
      onChange={props.handleChange}
      value={props.value}
    >
      {props.itemList.map(item => (
        <option key={item}>{item}</option>
      ))}
    </select>

    <br />
    <br />
    <button
      style={{
        color: "white",
        height: 30,
        width: 90,
        backgroundColor: "#018f75",
        borderRadius: 3
      }}
      type="submit"
    >
      Submit
    </button>
  </form>
);

export default AssignReadingLevelFormPage;
