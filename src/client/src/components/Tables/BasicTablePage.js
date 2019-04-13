import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
const BasicTablePage = props => (
  <Table bordered>
    <thead id="student-letter-table-head">{props.itemType}</thead>
    <th>Unlearned</th>
    <th>Learned</th>
    <tbody>
      <tr>
        <td>
          <ul>
            {props.items.unlearnedStudentList.map(name => (
              <Link to={`/details/${name.student_id}`}>
                <li id="item-name-list">{name.name}</li>
              </Link>
            ))}
          </ul>
        </td>
        <td>
          <ul>
            {props.items.learnedStudentList.map(name => (
              <Link to={`/details/${name.student_id}`}>
                <li id="item-name-list">{name.name}</li>
              </Link>
            ))}
          </ul>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default BasicTablePage;
