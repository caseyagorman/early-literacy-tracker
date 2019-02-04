import React from "react";
import { Table } from "react-bootstrap";
import DeleteNote from "../../containers/Forms/DeleteNote";
const NotesPage = props => (
  <Table
    style={{ maxWidth: 500, fontSize: 14, fontFamily: "krub" }}
    bordered="true"
  >
    <thead />
    <th style={{ width: "15%", height: 30, verticalAlign: "bottom" }}>Added</th>
    <th style={{ height: 30, verticalAlign: "bottom" }}> Notes</th>
    <th
      style={{
        width: "10%",
        height: 30,
        verticalAlign: "bottom"
      }}
    >
      Delete
    </th>

    <tbody style={{ fontSize: 14 }}>
      {props.group.notes.map(note => (
        <tr>
          <td>{note.date}</td>

          <td>{note.note} </td>
          <td>
            <DeleteNote group={props.group.name} note={note} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);
export default NotesPage;
