import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentItemLearned from "../../containers/Forms/StudentItemLearned";
import StudentItemUnlearned from "../../containers/Forms/StudentItemUnlearned";
import "./static/table.css";
const StudentDetailTable = student => (
  <div className="student-table">
    <Table bordered className="student-detail-table">
      <thead>
        <tr>
          <th id="words" colSpan="4">
            Words
          </th>
          <th id="letters" colSpan="4">
            Letters
          </th>
          <th id="sounds" colSpan="4">
            Sounds
          </th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Last Tested</th>
          <th>Word Count</th>
          <th>Learned Words</th>
          <th>Unlearned Words</th>
          <th>Last Tested</th>
          <th>Letter Count</th>
          <th>Learned Letters</th>
          <th>Unlearned Letters</th>
          <th>Last Tested</th>
          <th>Sound Count</th>
          <th>Learned Sounds</th>
          <th>Unlearned Sounds</th>
        </tr>
      </thead>
      <tbody className="student-detail-table">
        <tr className="student-detail-table">
          <td id="test-date">{student.student.lastWordTest}</td>
          <td className="student-detail-table">
            {student.student.wordCount}/{student.student.totalWordCount}
          </td>
          <td className="student-detail-table" style={{ width: "10%" }}>
            <ul className="unordered-list">
              {student.student.wordList.map(item => (
                <li className="student-detail-table-div">
                  <StudentItemUnlearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link id="link" to={`/item-detail/words/${item.item_id}`}>
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </td>
          <td className="student-detail-table" style={{ width: "10%" }}>
            <ul className="unordered-list">
              {console.log(
                "unlearned word list",
                student.student.unlearnedWordList
              )}
              {student.student.unlearnedWordList.map(item => (
                <li className="student-detail-table-div">
                  <StudentItemLearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link id="link" to={`/item-detail/words/${item.item_id}`}>
                    {item.item}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </td>
          <td id="test-date">{student.student.lastLetterTest} </td>
          <td>
            {student.student.letterCount}/{student.student.totalLetterCount}
          </td>
          <td style={{ width: "10%" }}>
            <ul className="unordered-list">
              {console.log("learned letter list", student.student.letterList)}
              {student.student.letterList.map(item => (
                <li className="student-detail-table-div">
                  <StudentItemUnlearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link id="link" to={`/item-detail/letters/${item.item_id}`}>
                    {item.item}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </td>
          <td style={{ width: "10%" }}>
            <ul className="unordered-list">
              {console.log(
                "unlearned letter list",
                student.student.unlearnedLetterList
              )}
              {student.student.unlearnedLetterList.map(item => (
                <li className="student-detail-table-div">
                  <StudentItemLearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link id="link" to={`/item-detail/letters/${item.item_id}`}>
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </td>

          <td id="test-date">{student.student.lastSoundTest} </td>
          <td>
            {student.student.soundCount}/{student.student.totalSoundCount}
          </td>
          <td style={{ width: "10%" }}>
            <ul className="unordered-list">
              {student.student.soundList.map(item => (
                <li className="student-detail-table-div">
                  <StudentItemUnlearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link id="link" to={`/item-detail/sounds/${item.item_id}`}>
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </td>
          <td style={{ width: "10%" }}>
            <ul className="unordered-list">
              {student.student.unlearnedSoundList.map(item => (
                <li className="student-detail-table-div">
                  <StudentItemLearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link id="link" to={`/item-detail/sounds/${item.item_id}`}>
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default StudentDetailTable;
