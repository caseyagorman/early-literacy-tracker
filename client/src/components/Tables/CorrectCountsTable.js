import React from "react";
import { Table } from "react-bootstrap";
const CorrectCountsTable = (items, onSort, route, itemType) => (
  <div>
    <h3>Times read correctly</h3>
    <Table striped bordered condensed hover>
      <thead>
        {console.log("correct counts table", itemType)}
        <tr>
          <th onClick={e => onSort(e, "testDate")}>
            {" "}
            {itemType.charAt(0).toUpperCase() + itemType.slice(1)}{" "}
          </th>
          <th onClick={e => onSort(e, "score")}>Correct Count</th>
          <th onClick={e => onSort(e, "correctItems")}>Incorrect Count</th>
        </tr>
      </thead>
      <tbody>
        {items.map(function(item) {
          return (
            <tr>
              <td>{item.item}</td>
              <td>{item.correctCount}</td>
              <td>{item.incCorrectCount}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  </div>
);

export default CorrectCountsTable;
