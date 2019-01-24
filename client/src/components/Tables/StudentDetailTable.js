import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentItemLearned from "../../containers/Forms/StudentItemLearned";
import StudentItemUnlearned from "../../containers/Forms/StudentItemUnlearned";
import "./static/table.css";
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
          <th>Learned Words</th>
          <th>Unlearned Words</th>
          <th>Last Word Test</th>
          <th>Letter Count</th>
          <th>Learned Letters</th>
          <th>Unlearned Letters</th>
          <th>Last Letter Test</th>
          <th>Sound Count</th>
          <th>Learned Sounds</th>
          <th>Unlearned Sounds</th>
          <th>Last Sound Test</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {student.student.wordCount}/{student.student.totalWordCount}
          </td>
          <td style={{ width: "10%" }}>
            <ul>
              {student.student.wordList.map(item => (
                <div className="student-detail-table-div">
                  <StudentItemUnlearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link to={`/item-detail/words/${item.item_id}`}>
                    {item.item}
                  </Link>
                </div>
              ))}
            </ul>
          </td>
          <td style={{ width: "10%" }}>
            <ul>
              {student.student.unlearnedWordList.map(item => (
                <div className="student-detail-table-div">
                  <StudentItemLearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link to={`/item-detail/words/${item.item_id}`}>
                    {item.item}{" "}
                  </Link>
                </div>
              ))}
            </ul>
          </td>
          <td>{student.student.lastWordTest}</td>
          <td>
            {student.student.letterCount}/{student.student.totalLetterCount}
          </td>
          <td style={{ width: "10%" }}>
            <ul>
              {student.student.letterList.map(item => (
                <div className="student-detail-table-div">
                  <StudentItemUnlearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link to={`/item-detail/letters/${item.item_id}`}>
                    {item.item}{" "}
                  </Link>
                </div>
              ))}
            </ul>
          </td>
          <td style={{ width: "10%" }}>
            <ul>
              {student.student.unlearnedLetterList.map(item => (
                <div className="student-detail-table-div">
                  <StudentItemLearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link to={`/item-detail/letters/${item.item_id}`}>
                    {item.item}
                  </Link>
                </div>
              ))}
            </ul>
          </td>

          <td>{student.student.lastLetterTest} </td>
          <td>
            {student.student.soundCount}/{student.student.totalSoundCount}
          </td>
          <td style={{ width: "10%" }}>
            <ul>
              {student.student.soundList.map(item => (
                <div className="student-detail-table-div">
                  <StudentItemUnlearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link to={`/item-detail/sounds/${item.item_id}`}>
                    {item.item}
                  </Link>
                </div>
              ))}
            </ul>
          </td>
          <td style={{ width: "10%" }}>
            <ul>
              {student.student.unlearnedSoundList.map(item => (
                <div className="student-detail-table-div">
                  <StudentItemLearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link to={`/item-detail/sounds/${item.item_id}`}>
                    {item.item}
                  </Link>
                </div>
              ))}
            </ul>
          </td>
          <td>{student.student.lastSoundTest} </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default StudentDetailTable;
