import React from "react";
import { Table, OverlayTrigger, ProgressBar, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentItemLearned from "../../containers/Forms/StudentItemLearned";
import StudentItemUnlearned from "../../containers/Forms/StudentItemUnlearned";
import "./static/table.css";

const columnGroupingColor = "#003d59";
const columnGroupingWidth = "1px";
const thStyle = {
  border: columnGroupingWidth + " solid " + columnGroupingColor,
  borderBottom: 0
};
const borderLeftStyle = {
  borderLeft: columnGroupingWidth + " solid " + columnGroupingColor
};
const borderRightStyle = {
  borderRight: columnGroupingWidth + " solid " + columnGroupingColor
};
const borderBottomStyle = {
  borderBottom: columnGroupingWidth + " solid " + columnGroupingColor
};

const StudentDetailTable = student => (
  <div className="student-table">
    <Table bordered className="student-detail-table">
      {console.log("STUDENT DETAIL TABLE", student)}
      <thead>
        <tr>
          <th id="table-header" colSpan="2" style={thStyle}>
            Words
            <br />
            <OverlayTrigger
              placement={"top"}
              overlay={
                <Tooltip>
                  {student.student.name} knows {student.student.wordCount}/
                  {student.student.totalWordCount} words
                </Tooltip>
              }
            >
              <ProgressBar
                animated
                now={
                  (student.student.wordCount / student.student.totalWordCount) *
                  100
                }
              />
            </OverlayTrigger>
          </th>
          <th id="table-header" colSpan="2" style={thStyle}>
            Letters
            <br />
            <OverlayTrigger
              placement={"top"}
              overlay={
                <Tooltip>
                  {student.student.name} knows {student.student.letterCount}/
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
          </th>
          <th id="table-header" colSpan="2" style={thStyle}>
            Sounds
            <br />
            <OverlayTrigger
              placement={"top"}
              overlay={
                <Tooltip>
                  {student.student.name} knows {student.student.soundCount}/
                  {student.student.totalSoundCount} sounds
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
          </th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th style={borderLeftStyle}>Learned Words</th>
          <th style={borderRightStyle}>Unlearned Words</th>

          <th style={borderLeftStyle}>Learned Letters</th>
          <th style={borderRightStyle}>Unlearned Letters</th>

          <th style={borderLeftStyle}>Learned Sounds</th>
          <th style={borderRightStyle}>Unlearned Sounds</th>
        </tr>
      </thead>
      <tbody className="student-detail-table">
        <tr className="student-detail-table">
          <td
            className="student-detail-table"
            style={Object.assign(
              { width: "10%" },
              borderLeftStyle,
              borderBottomStyle
            )}
          >
            <ul className="unordered-list">
              {student.student.wordList.map(item => (
                <li>
                  <StudentItemUnlearned
                    item={item}
                    student={student.student.student_id}
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
          <td
            className="student-detail-table"
            style={Object.assign(
              { width: "10%" },
              borderRightStyle,
              borderBottomStyle
            )}
          >
            <ul className="unordered-list">
              {student.student.unlearnedWordList.map(item => (
                <li>
                  {console.log("item", item)}
                  <StudentItemLearned
                    item={item}
                    student={student.student.student_id}
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
          {/* <td id="test-date">{student.student.lastLetterTest} </td> */}

          <td
            style={Object.assign(
              { width: "10%" },
              borderLeftStyle,
              borderBottomStyle
            )}
          >
            <ul className="unordered-list">
              {student.student.letterList.map(item => (
                <li>
                  {console.log("item", item)}
                  <StudentItemUnlearned
                    item={item}
                    student={student.student_id}
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
          <td
            style={Object.assign(
              { width: "10%" },
              borderRightStyle,
              borderBottomStyle
            )}
          >
            <ul className="unordered-list">
              {student.student.unlearnedLetterList.map(item => (
                <li>
                  <StudentItemLearned
                    item={item}
                    student={student.student.student_id}
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
          <td
            style={Object.assign(
              { width: "10%" },
              borderLeftStyle,
              borderBottomStyle
            )}
          >
            <ul className="unordered-list">
              {student.student.soundList.map(item => (
                <li>
                  <StudentItemUnlearned
                    item={item}
                    student={student.student.student_id}
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
          <td
            style={Object.assign(
              { width: "10%" },
              borderRightStyle,
              borderBottomStyle
            )}
          >
            <ul className="unordered-list">
              {student.student.unlearnedSoundList.map(item => (
                <li>
                  <StudentItemLearned
                    item={item}
                    student={student.student.student_id}
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
