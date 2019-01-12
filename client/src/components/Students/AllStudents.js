import React from "react";
import AddButton from "../Buttons/AddButton";
import ViewButton from "../Buttons/ViewButton";
import TableContainer from "../../containers/Tables/TableContainer";

const allStudents = props => (
  <div className="container">
    <br />
    <h1 id="display-student">All Students</h1>
    <div id="instructions">
      Click dashboard to test student, view words student is learning, and view
      student data. Click book to view student reports.
    </div>
    <br />
    <div>
      <AddButton /> <ViewButton />
    </div>
    <div>
      <br />
    </div>
    <div>
      {/* <TableContainer
        token={this.props.token}
        renderTable={StudentTableComponent}
        tableElements={students} */}
      />
    </div>
  </div>
);
export default allStudents;
