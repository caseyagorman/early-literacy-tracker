import React from "react";
import { Link } from "react-router-dom";
import DeleteItem from "../../containers/Forms/DeleteItem";
import { Table } from "react-bootstrap";
import "./static/table.css";

const ItemsTable = (items, onSort, route, itemType) => (
  <Table bordered="true" hover="true">
    <thead>
      <tr>
        <th onClick={e => onSort(e, "item")}> {itemType}</th>
        <th onClick={e => onSort(e, "unlearnedCount")}> Unlearned Count</th>
        <th onClick={e => onSort(e, "learnedCount")}> Learned Count</th>
      </tr>
    </thead>
    <tbody>
      {items.map(function(item) {
        return (
          <tr key={item.itemId}>
            <td style={{ width: "30%" }}>
              <Link
                to={`/item-detail/${itemType}/${item.itemId}`}
                className="link"
              >
                <h2>{item.item}</h2>
              </Link>
              <DeleteItem item={item.itemId} itemType={itemType} />
            </td>
            <td style={{ width: "15%", textAlign: "center", fontSize: 24 }}>
              {item.unlearnedCount}
            </td>
            <td style={{ width: "15%", textAlign: "center", fontSize: 24 }}>
              {item.learnedCount}
            </td>
          </tr>
        );
      })}
      <tr>
        <td colSpan="8">
          <a href={route} className="link">
            + Click to add new item
          </a>
        </td>
      </tr>
    </tbody>
  </Table>
);
export default ItemsTable;
