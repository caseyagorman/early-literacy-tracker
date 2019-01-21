import React from "react";
import MainButton from "../Buttons/MainButton";
import TableContainer from "../../containers/Tables/TableContainer";
import StudentSnapshot from "./StudentSnapshot";
import StudentTable from "../Tables/StudentTable";

const AllStudentsPage = props => (
  <div className="container">
    <br />
    <h1 id="display-student">All Students</h1>
    <div id="instructions">
      Click dashboard to test student, view words student is learning, and view
      student data. Click book to view student reports.
    </div>
    <br />
    {/* <StudentSnapshot /> */}
    <div>
      <MainButton
        id="students-button-add-student"
        text={"Add Student"}
        route={`/add-student`}
      />
      <MainButton
        id="students-button-view-charts"
        text={"View Student Word Charts"}
        route={`/student-charts`}
      />
      <MainButton
        id="students-button-view-data"
        text={"View Student Letter Charts"}
        route={`/student-data`}
      />

      <MainButton
        id="students-button-view-data"
        text={"View Student Sound Charts"}
        route={`/student-data`}
      />
    </div>
    <div>
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
);
export default AllStudentsPage;
