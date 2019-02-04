import React from "react";
import { Table } from "react-bootstrap";
import "./static/table.css";

const GroupTable = group => (
  <Table bordered="true" hover="true">
    <thead>
      <tr>
        <th> Words</th>
        <th> Letters</th>
        <th> Sounds</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <ul>
            {group.group.words.map(word => (
              <li style={{ fontColor: "black", fontSize: 24 }}>{word}</li>
            ))}
          </ul>
        </td>
        <td>
          <ul>
            {group.group.letters.map(letter => (
              <li style={{ fontColor: "black", fontSize: 24 }}>{letter}</li>
            ))}
          </ul>
        </td>
        <td>
          <ul>
            {group.group.sounds.map(sound => (
              <li style={{ fontColor: "black", fontSize: 24 }}>{sound}</li>
            ))}
          </ul>
        </td>
      </tr>
    </tbody>
  </Table>
);
export default GroupTable;
