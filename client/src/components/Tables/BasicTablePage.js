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
          {props.items.unlearnedStudentList.map(name => (
            <Link to={`/details/${name.student_id}`}>
              <li>{name.name}</li>
            </Link>
          ))}
        </td>
        <td>
          {props.items.learnedStudentList.map(name => (
            <Link to={`/details/${name.student_id}`}>
              <li>{name.name}</li>
            </Link>
          ))}
        </td>
      </tr>
    </tbody>
  </Table>
);

export default BasicTablePage;
