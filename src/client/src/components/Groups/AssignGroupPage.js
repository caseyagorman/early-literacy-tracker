import React from "react";
import { Link } from "react-router-dom";

const AssignGroupPage = props => (
  <div style={{ fontFamily: "krub" }}>
    <h1>Assign students to groups</h1>
    <br />
    <p>
      Hold down shift to select multiple adjacent students.
      <br /> Hold down command (mac) control (PC) to select multiple
      non-adjacent students. <br /> Click group name to view group details.
    </p>

    <Link
      style={{
        color: "#018f75",
        textDecoration: "underline",
        fontSize: 16,
        fontFamily: "krub"
      }}
      to={"/create-group/"}
    >
      Create New Group
    </Link>
    <br />
    <br />
  </div>
);

export default AssignGroupPage;
