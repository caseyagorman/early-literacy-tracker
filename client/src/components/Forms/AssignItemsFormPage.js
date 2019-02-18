import React from "react";
import "./static/form.css";

const formatItemsTitle = string => {
  let name = string.split("/");
  name = name[name.length - 1];
  name = name
    .split("-")
    .map(word => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
  return name;
};

const AssignItemsFormPage = props => (
  <form
    onSubmit={props.handleSubmit}
    style={{ float: "left", width: 250, fontFamily: "krub" }}
  >
    <label id="form-label">
      <b>{formatItemsTitle(props.listTitle)}</b>
    </label>
    <br />
    <select
      style={{
        fontSize: 18,
        verticalAlign: "bottom",
        width: 200,
        minHeight: 500
      }}
      onChange={props.handleChange}
      multiple="true "
      value={props.value}
    >
      {props.itemList.map(item => (
        <option key={item}>{item}</option>
      ))}
    </select>
    <br />
    <button
      style={{
        marginTop: 10,
        backgroundColor: "#018f75",
        color: "white",
        fontSize: 18,
        padding: 10,
        marginLeft: 10,
        borderRadius: 4
      }}
      type="submit"
    >
      Submit
    </button>
  </form>
);

export default AssignItemsFormPage;
