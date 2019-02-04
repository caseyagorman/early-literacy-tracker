import React from "react";
import { Table } from "react-bootstrap";
import DeleteNote from "../../containers/Forms/DeleteNote";
const NotesPage = props => (
  <Table style={{ maxWidth: 500, fontFamily: "krub" }} bordered="true">
    <thead />
    <th style={{ fontSize: 20, width: "15%" }}>Date added</th>
    <th style={{ fontSize: 20 }}>Notes</th>
    <th style={{ width: "10%" }}>Delete</th>

    <tbody style={{ fontSize: 14 }}>
      {props.group.notes.map(note => (
        <tr>
          <td>{note.date}</td>

          <td>{note.note} </td>
          <td>
            <DeleteNote note={note} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);
export default NotesPage;
