import React from "react";
import { Link } from "react-router-dom";
import DeleteItem from "../../containers/Forms/DeleteItem";
import { Table } from "react-bootstrap";
import "./static/table.css";

const ItemsTable = (items, onSort, route, itemType) => (
  <Table bordered="true" hover="true">
    {console.log("items", items)}
    <thead>
      <tr>
        <th onClick={e => onSort(e, "item")}> Sort A-Z</th>
      </tr>
    </thead>
    <tbody>
      {items.map(function(item) {
        return (
          <tr key={item.itemId}>
            <td>
              <Link
                to={`/item-detail/${itemType}/${item.itemId}`}
                className="link"
              >
                <h2 id="item-name-table-header">{item.item}</h2>
              </Link>
              {console.log(item.itemId)}
              <DeleteItem item={item.itemId} itemType={itemType} />
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
