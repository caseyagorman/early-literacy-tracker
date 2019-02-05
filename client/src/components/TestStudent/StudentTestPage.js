import React from "react";
import "./static/test.css";

const StudentTestPage = props => (
  <div className="container">
    <div
      style={{
        marginTop: "5%",
        marginLeft: "25%",
        fontSize: 200,
        fontFamily: "krub",
        color: "black"
      }}
    >
      {props.displayItem(props.studentTestItems[props.idx])}
    </div>
    <button
      style={{
        width: 100,
        borderRadius: 4,
        fontSize: 24,
        fontFamily: "krub",
        marginLeft: "20%",
        padding: 5,
        backgroundColor: "#44857d",
        color: "white"
      }}
      onClick={e =>
        props.handleTestClick(e, props.studentTestItems[props.idx], props.idx)
      }
      value="yes"
    >
      Yes
    </button>
    <button
      style={{
        width: 100,
        borderRadius: 4,
        fontSize: 24,
        fontFamily: "krub",
        marginLeft: "25%",
        padding: 5,
        backgroundColor: "#FE6625",
        color: "white"
      }}
      onClick={e =>
        props.handleTestClick(e, props.studentTestItems[props.idx], props.idx)
      }
      value="no"
    >
      No
    </button>
    <button
      onClick={e => props.endTest(e)}
      style={{
        fontFamily: "krub",
        width: 150,
        borderRadius: 4,
        fontSize: 24,
        marginLeft: "35%",
        backgroundColor: "rgb(0, 61, 89, 0.7)",
        color: "white"
      }}
    >
      End Test
    </button>
  </div>
);
export default StudentTestPage;
