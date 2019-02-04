import React from "react";
import { Table } from "react-bootstrap";
const NotesPage = props => (
  <Table style={{ maxWidth: 500, fontFamily: "krub" }} bordered="true">
    <thead />
    <th style={{ fontSize: 20, width: "15%" }}>Date added</th>
    <th style={{ fontSize: 20 }}>Notes</th>

    <tbody style={{ fontSize: 14 }}>
      <tr>
        {props.group.notes.map(note => (
          <td>{note.date}</td>
        ))}
        {props.group.notes.map(note => (
          <td>{note.note}</td>
        ))}
      </tr>
    </tbody>
  </Table>
);
export default NotesPage;
