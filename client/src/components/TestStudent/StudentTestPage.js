import React from "react";

const StudentTestPage = props => (
  <div className="container">
    <div>{props.displayItem(props.studentTestItems[props.idx])}</div>
    <button
      id="yes-button"
      onClick={e =>
        props.handleTestClick(e, props.studentTestItems[props.idx], props.idx)
      }
      value="yes"
    >
      Yes
    </button>
    <button
      id="no-button"
      onClick={e =>
        props.handleTestClick(e, props.studentTestItems[props.idx], props.idx)
      }
      value="no"
    >
      No
    </button>
    <button onClick={e => props.endTest(e)} id="end-test-button">
      End Test
    </button>
  </div>
);
export default StudentTestPage;
