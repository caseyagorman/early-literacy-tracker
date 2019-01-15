import React from "react";
import MainButton from "../Buttons/MainButton";
// import TableContainer from "../../containers/Tables/TableContainer";
// import StudentSnapshot from "./StudentSnapshot";
// import StudentTable from "../Tables/StudentTable";
const AllItemsPage = props => (
  <div className="container">
    {console.log("All Items Page", props)}
    <br />
    <h1 id="display-items">
      All{" "}
      {props.items.itemType.charAt(0).toUpperCase() +
        props.items.itemType.slice(1)}
    </h1>
    <div id="instructions">
      Click dashboard to test student, view {props.items.itemType} student is
      learning, and view student data. Click book to view {props.items.itemType}{" "}
      reports.
    </div>
    <br />
    <MainButton route={props.route} text={props.text} />
  </div>
);

export default AllItemsPage;