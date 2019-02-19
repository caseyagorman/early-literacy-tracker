import React from "react";
import { Table } from "react-bootstrap";
import DeleteNote from "../../containers/Forms/DeleteNote";
import moment from "moment";

const renderDate = date => {
  // return date;
  date = moment(date).format("ddd MMM Do");
  if (date === "Invalid date") {
    date = "Not tested";
  }
  return date;
};

const NotesPage = props => (
  <Table style={{ fontSize: 14, fontFamily: "krub" }} bordered="true">
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
          <td>{renderDate(note.date)}</td>

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
