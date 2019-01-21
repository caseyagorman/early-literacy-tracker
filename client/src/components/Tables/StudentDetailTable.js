import React from "react";
import { Table } from "react-bootstrap";
const listElements = el => <li>{el}</li>;

const StudentDetailTable = student => (
  <div className="student-table">
    <Table bordered>
      <thead>
        <tr>
          <th colSpan="4"> Words </th>
          <th colSpan="4"> Letters </th>
          <th colSpan="4"> Sounds </th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Word Count</th>
          <th>Words Learned</th>
          <th>Unlearned Words</th>
          <th>Last Word Test</th>
          <th>Letter Count</th>
          <th>Letters Learned</th>
          <th>Unlearned Learned</th>
          <th>Last Letter Test</th>
          <th>Sound Count</th>
          <th>Sounds Learned</th>
          <th>Unlearned Sounds</th>
          <th>Last Sound Test</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {student.student.wordCount}/{student.student.totalWordCount}
          </td>
          <td>{student.student.wordList}</td>
          <td />
          <td>
            this thingy !
            {/* <ul>{student.student.wordList.map(listElements)}</ul> */}
          </td>
          <td>
            unlearned words
            {console.log(student.student.unlearnedWordList)}
            <ul>
              {student.student.unlearnedWordList.map(item => (
                <li>{item.item}</li>
              ))}
            </ul>
          </td>
          <td>
            {/* {student.student.letterCount}/{student.student.totalLetterCount} */}
          </td>
          <td>
            {/* <ul>{student.student.letterList.map(listElements)}</ul> */}
          </td>
          <td>
            {/* <ul>{student.student.unlearnedLetterList.map(listElements)}</ul> */}
          </td>
          <td>{student.student.lastLetterTest} </td>
          <td>
            {student.student.soundCount}/{student.student.totalSoundCount}
          </td>
          <td>
            {/* <ul>{student.student.soundList.map(listElements)}</ul> */}
          </td>
          <td>
            {/* <ul>{student.student.unlearnedSoundList.map(listElements)}</ul> */}
          </td>
          <td>{student.student.lastSoundTest} </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default StudentDetailTable;
