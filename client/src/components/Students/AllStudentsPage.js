import React from "react";
import TableContainer from "../../containers/Tables/TableContainer";
import StudentTable from "../Tables/StudentTable";
import "./static/students.css";
import AllStudentsMenu from "./AllStudentsMenu";
const AllStudentsPage = props => (
  <div className="container">
    <div className="students">
      <br />
      <h1 id="display-student">All Students</h1>
      <div id="instructions">
        Click dashboard to test student, view words student is learning, <br />{" "}
        and view student data.
      </div>
      <br />
      <div />
      <div>
        <AllStudentsMenu />
        <br />
      </div>
      <div>
        <TableContainer
          token={props.token}
          renderTable={StudentTable}
          tableElements={props.students}
        />
      </div>
    </div>
  </div>
);
export default AllStudentsPage;
