import React from "react";
import { Table, OverlayTrigger, ProgressBar, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentItemLearned from "../../containers/Forms/StudentItemLearned";
import StudentItemUnlearned from "../../containers/Forms/StudentItemUnlearned";
import "./static/table.css";
const StudentDetailTable = student => (
  <div className="student-table">
    <Table bordered className="student-detail-table">
      {console.log("student detail table")}
      <thead>
        <tr>
          <th id="table-header" colSpan="4">
            Words
          </th>
          <th id="table-header" colSpan="4">
            Letters
          </th>
          <th id="table-header" colSpan="4">
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
          <td>
            <OverlayTrigger
              placement={"top"}
              overlay={
                <Tooltip>
                  {student.student.student.name} knows{" "}
                  {student.student.letterCount}/
                  {student.student.totalLetterCount} letters
                </Tooltip>
              }
            >
              <ProgressBar
                animated
                now={
                  (student.student.letterCount /
                    student.student.totalLetterCount) *
                  100
                }
              />
            </OverlayTrigger>
          </td>
          <td className="student-detail-table" style={{ width: "10%" }}>
            <ul className="unordered-list">
              {student.student.wordList.map(item => (
                <li className="student-detail-table-div">
                  <StudentItemUnlearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link
                    className="link"
                    to={`/item-detail/words/${item.item_id}`}
                  >
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </td>
          <td className="student-detail-table" style={{ width: "10%" }}>
            <ul className="unordered-list">
              {student.student.unlearnedWordList.map(item => (
                <li className="student-detail-table-div">
                  <StudentItemLearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link
                    className="link"
                    to={`/item-detail/words/${item.item_id}`}
                  >
                    {item.item}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </td>
          <td id="test-date">{student.student.lastLetterTest} </td>
          <td>
            <OverlayTrigger
              placement={"top"}
              overlay={
                <Tooltip>
                  {student.student.student.name} knows{" "}
                  {student.student.letterCount}/
                  {student.student.totalLetterCount} letters
                </Tooltip>
              }
            >
              <ProgressBar
                animated
                now={
                  (student.student.letterCount /
                    student.student.totalLetterCount) *
                  100
                }
              />
            </OverlayTrigger>
          </td>
          <td style={{ width: "10%" }}>
            <ul className="unordered-list">
              {student.student.letterList.map(item => (
                <li className="student-detail-table-div">
                  <StudentItemUnlearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link
                    className="link"
                    to={`/item-detail/letters/${item.item_id}`}
                  >
                    {item.item}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </td>
          <td style={{ width: "10%" }}>
            <ul className="unordered-list">
              {student.student.unlearnedLetterList.map(item => (
                <li className="student-detail-table-div">
                  <StudentItemLearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link
                    className="link"
                    to={`/item-detail/letters/${item.item_id}`}
                  >
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </td>

          <td id="test-date">{student.student.lastSoundTest} </td>
          <td>
            <OverlayTrigger
              placement={"top"}
              overlay={
                <Tooltip>
                  {student.student.student.name} knows{" "}
                  {student.student.soundCount}/{student.student.totalSoundCount}{" "}
                  sounds
                </Tooltip>
              }
            >
              <ProgressBar
                animated
                now={
                  (student.student.soundCount /
                    student.student.totalSoundCount) *
                  100
                }
              />
            </OverlayTrigger>
          </td>
          <td style={{ width: "10%" }}>
            <ul className="unordered-list">
              {student.student.soundList.map(item => (
                <li className="student-detail-table-div">
                  <StudentItemUnlearned
                    item={item}
                    student={student.student.student.student_id}
                  />
                  <Link
                    className="link"
                    to={`/item-detail/sounds/${item.item_id}`}
                  >
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
                  <Link
                    className="link"
                    to={`/item-detail/sounds/${item.item_id}`}
                  >
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
