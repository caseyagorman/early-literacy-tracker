import React from "react";
import MainButton from "../Buttons/MainButton";
// import TableContainer from "../../containers/Tables/TableContainer";
// import StudentSnapshot from "./StudentSnapshot";
// import StudentTable from "../Tables/StudentTable";
const AllItemsPage = props => (
  <div className="container">
    {console.log("props", props)}
    <br />
    <h1 id="display-items">All {props.type}</h1>
    <div id="instructions">
      Click dashboard to test student, view words student is learning, and view
      student data. Click book to view student reports.
    </div>
    <br />
    <MainButton route={props.route} text={props.text} />
  </div>
);
export default AllItemsPage;
