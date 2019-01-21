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
    <MainButton
      route={`/add-${props.itemType}`}
      text={`Add ${props.itemType.charAt(0).toUpperCase() +
        props.itemType.slice(1)}`}
    />
    <MainButton
      route={`/item-charts/${props.itemType}`}
      text={`View ${props.itemType.charAt(0).toUpperCase() +
        props.itemType.slice(1)} Charts`}
    />
    <TableContainer
      renderTable={ItemsTable}
      tableElements={props.items}
      route={`/add-${props.itemType}`}
      itemType={props.itemType}
    />
  </div>
);

export default AllItemsPage;
