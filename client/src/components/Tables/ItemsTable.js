import React from "react";
import { Link } from "react-router-dom";
import DeleteItem from "../../containers/Forms/DeleteItem";
import { Table } from "react-bootstrap";
// Display table head of words students are learning
const noBulletList = { listStyleType: "none" };
const listElements = el => <li>{el}</li>;

const ItemsTable = (items, onSort, route, itemType) => (
  <Table bordered="true" hover="true">
    <thead>
      <tr>
        <th onClick={e => onSort(e, "item")}> Item</th>
      </tr>
    </thead>
    <tbody>
      {items.map(function(item) {
        return (
          <tr key={item.item_id}>
            <td>
              <Link
                to={`/item-detail/${itemType}/${item.item_id}`}
                className="link"
              >
                <h2 id="item-name-table-header">{item.item}</h2>
              </Link>
              <DeleteItem item={item} />
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
