import React from "react";
import "./static/test.css";
import { Row } from "react-bootstrap";
const StudentTestPage = props => (
  <div
    className="container"
    style={{
      textAlign: "center"
    }}
  >
    <div
      style={{
        textAlign: "center",
        marginTop: "5%",
        fontSize: 300,
        fontFamily: "krub",
        color: "black"
      }}
    >
      <Row>{props.displayItem(props.studentTestItems[props.idx])}</Row>
    </div>
    <Row>
      <button
        style={{
          width: 100,
          borderRadius: 4,
          fontSize: 24,
          fontFamily: "krub",
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
    </Row>
    <button
      onClick={e => props.endTest(e)}
      style={{
        fontFamily: "krub",
        height: 46,
        width: 150,
        borderRadius: 4,
        fontSize: 24,

        backgroundColor: "rgb(0, 61, 89, 0.7)",
        color: "white"
      }}
    >
      End Test
    </button>
  </div>
);
export default StudentTestPage;
