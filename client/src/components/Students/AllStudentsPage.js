import React from "react";
import TableContainer from "../../containers/Tables/TableContainer";
import StudentTable from "../Tables/StudentTable";
import "./static/students.css";
// import AllStudentsMenu from "./AllStudentsMenu";
import AllStudentsInstructions from "./AllStudentsInstructions";
const AllStudentsPage = props => (
  <div className="container">
    <div style={{ fontFamily: "Krub" }}>
      <AllStudentsInstructions student={props.student} />
      <br />
      <div style={{ marginLeft: 20 }}>
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
