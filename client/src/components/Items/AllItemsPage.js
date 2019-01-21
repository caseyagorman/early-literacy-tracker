import React from "react";
import MainButton from "../Buttons/MainButton";
import TableContainer from "../../containers/Tables/TableContainer";
import ItemsTable from "../Tables/ItemsTable";
const AllItemsPage = props => (
  <div className="container">
    <br />
    <h1 id="display-items">
      All {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1)}
    </h1>
    <div id="instructions">
      Click dashboard to test student, view {props.items.itemType} student is
      learning, and view student data. Click book to view {props.items.itemType}{" "}
      reports.
    </div>
    <br />
    <MainButton route={props.route} text={props.text} />
    <TableContainer
      // token={props.token}
      renderTable={ItemsTable}
      tableElements={props.items.items}
      route={props.route}
      itemType={props.itemType}
    />
  </div>
);

export default AllItemsPage;
