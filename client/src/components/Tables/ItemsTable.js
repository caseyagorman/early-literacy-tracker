import React from "react";
import { Link } from "react-router-dom";

// Display table head of words students are learning
const noBulletList = { listStyleType: "none" };
const listElements = el => <li>{el}</li>;

const ItemsTable = (items, onSort, route, itemType) => (
  <table bordered="true" hover="true">
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
              {console.log("item in table", route, itemType)}
              <Link to={`/item-detail/${item.item_id}`} className="link">
                <h2 id="item-name-table-header">{item.item}</h2>
              </Link>
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
  </table>
);
export default ItemsTable;
