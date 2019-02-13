import React from "react";
import MainButton from "../Buttons/MainButton";
import TableContainer from "../../containers/Tables/TableContainer";
import ItemsTable from "../Tables/ItemsTable";
import "./static/items.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const AllItemsPage = props => (
  <div className="container" id="items">
    <br />
    <h1 id="display-items">
      {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1)}
    </h1>
    <br />

    <MainButton
      title={`click to view ${props.itemType} charts`}
      id="add-items"
      route={`/add-items/${props.itemType}`}
      text={`Add ${props.itemType.charAt(0).toUpperCase() +
        props.itemType.slice(1)}`}
    />

    <MainButton
      id="item-charts"
      route={`/item-charts/${props.itemType}`}
      text={`View Charts`}
    />
    <TableContainer
      renderTable={ItemsTable}
      tableElements={props.items}
      route={`/add-items/${props.itemType}`}
      itemType={props.itemType}
    />
  </div>
);

export default AllItemsPage;
