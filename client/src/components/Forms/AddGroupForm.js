import React from "react";

const AddGroupForm = props => (
  <div className="container">
    <form onSubmit={props.handleSubmit} style={{ fontFamily: "krub" }}>
      <h1>Add New Group Name</h1>
      <br />
      <div className="container">
        <input
          style={{ width: 200, height: 45 }}
          name="group"
          componentClass="text"
          placeholder="enter new group name"
          value={props.value}
          onChange={props.handleChange}
        />
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
        Add group
      </button>
    </form>
  </div>
);

export default AddGroupForm;
