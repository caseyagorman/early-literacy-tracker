import React from "react";
import TableContainer from "../../containers/Tables/TableContainer";
import StudentTable from "../Tables/StudentTable";
import "./static/students.css";
import AllStudentsMenu from "./AllStudentsMenu";
const AllStudentsPage = props => (
  <div className="container">
    <div className="students">
      <br />
      <h1 className="display-student">All Students</h1>
      <div className="instructions">
        Click student name to test student, <br />view words student is
        learning, and view student data.
      </div>
      <AllStudentsMenu />
      <div>
        <TableContainer
          actions={props.studentTestActions}
          token={props.token}
          renderTable={StudentTable}
          tableElements={props.students}
        />
      </div>
    </div>
  </div>
);
export default AllStudentsPage;
