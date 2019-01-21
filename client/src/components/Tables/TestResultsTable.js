import React from "react";
import { Table } from "react-bootstrap";
const TestResultsTable = (testResults, onSort, itemType) => (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th onClick={e => onSort(e, "testDate")}>Test taken</th>
        <th onClick={e => onSort(e, "score")}>Score</th>
        <th onClick={e => onSort(e, "correctItems")}>Correct</th>
        <th onClick={e => onSort(e, "incorrectItems")}>Incorrect</th>
      </tr>
    </thead>
    <tbody>
      {testResults.map(function(testResults) {
        return (
          <tr>
            <td>{testResults.testDate}</td>
            <td>{testResults.score}</td>
            <td>
              {testResults.correctItems.map(item => (
                <li>{item}</li>
              ))}
            </td>
            <td>
              {testResults.incorrectItems.map(item => (
                <li>{item}</li>
              ))}
            </td>
          </tr>
        );
      })}
    </tbody>
  </Table>
);

export default TestResultsTable;
