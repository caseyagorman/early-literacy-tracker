import React from "react";
import { Link } from "react-router-dom";
import DeleteStudent from "../../containers/Forms/DeleteStudent";
import moment from "moment";
import { Table, OverlayTrigger, Tooltip, ProgressBar } from "react-bootstrap";

const renderDate = date => {
  date = moment(date).format("ddd MMM Do");
  if (date === "Invalid date") {
    date = "Not tested";
  }
  return date;
};

const StudentTable = (
  students,
  onSort,
  route,
  itemType,
  studentTestActions
) => (
  <Table bordered>
    <thead>
      <tr>
        <th id="students-table" onClick={e => onSort(e, "name")}>
          Name
        </th>
        <th id="students-table" onClick={e => onSort(e, "group")}>
          Group Name
        </th>
        <th id="students-table" onClick={e => onSort(e, "readingLevel")}>
          Reading Level
        </th>
        <th
          id="students-table"
          onClick={e => onSort(e, "lastReadingLevelUpdate")}
        >
          Last Reading Update
        </th>
        <th id="students-table" onClick={e => onSort(e, "wordCount")}>
          Words Learned
        </th>
        <th id="students-table" onClick={e => onSort(e, "lastWordTest")}>
          Last Word Test{" "}
        </th>
        <th id="students-table" onClick={e => onSort(e, "letterCount")}>
          Letters Learned{" "}
        </th>
        <th id="students-table" onClick={e => onSort(e, "lastLetterTest")}>
          Last Letter Test{" "}
        </th>
        <th id="students-table" onClick={e => onSort(e, "soundCount")}>
          Sounds Learned{" "}
        </th>
        <th id="students-table" onClick={e => onSort(e, "lastSoundTest")}>
          Last Sound Test{" "}
        </th>
      </tr>
    </thead>
    <tbody className="students-table">
      {students.map(function(student) {
        return (
          <tr key={student.student_id}>
            <td id="students-table">
              <OverlayTrigger
                placement={"top"}
                overlay={<Tooltip>view {student.name}'s data</Tooltip>}
              >
                <Link to={`/details/${student.studentId}`} className="link">
                  <h3 id="student-name-table-header">{student.name}</h3>
                </Link>
              </OverlayTrigger>
              <DeleteStudent id="delete-student" student={student.studentId} />
            </td>
            <td id="students-table">
              <OverlayTrigger
                placement={"top"}
                overlay={<Tooltip>view {student.name}'s group details</Tooltip>}
              >
                <Link
                  to={`/group-detail/${student.group}`}
                  style={{ color: "#44857d", textDecoration: "underline" }}
                >
                  {student.group}
                </Link>
              </OverlayTrigger>
            </td>
            <td id="students-table">{student.readingLevel}</td>
            <td id="students-table">
              {" "}
              {renderDate(student.lastReadingLevelUpdate)}
              <br />
              <OverlayTrigger
                placement={"top"}
                overlay={
                  <Tooltip>
                    Click to update {student.name}'s reading level
                  </Tooltip>
                }
              >
                <Link
                  style={{ color: "#44857d", textDecoration: "underline" }}
                  to={`/details/${student.studentId}`}
                >
                  Update
                </Link>
              </OverlayTrigger>
            </td>
            <td id="students-table">
              <br />
              <OverlayTrigger
                placement={"top"}
                overlay={
                  <Tooltip>
                    {student.name} knows {student.wordCount}/
                    {student.totalWordCount} words
                  </Tooltip>
                }
              >
                <ProgressBar
                  now={(student.wordCount / student.totalWordCount) * 100}
                />
              </OverlayTrigger>
            </td>
            <td id="students-table">
              {" "}
              {renderDate(student.lastWordTest)}
              <br />
              <OverlayTrigger
                placement={"top"}
                overlay={
                  <Tooltip>Click to test {student.name}'s words</Tooltip>
                }
              >
                <Link
                  to={`/test-student/words/${student.studentId}`}
                  className="underline-link"
                  onClick={() => studentTestActions.beginTest("words")}
                >
                  Test
                </Link>
              </OverlayTrigger>
            </td>
            <td id="students-table">
              <br />
              <OverlayTrigger
                placement={"top"}
                overlay={
                  <Tooltip>
                    {student.name} knows {student.letterCount}/
                    {student.totalLetterCount} letters
                  </Tooltip>
                }
              >
                <ProgressBar
                  now={(student.letterCount / student.totalLetterCount) * 100}
                />
              </OverlayTrigger>
            </td>
            <td id="students-table">
              {" "}
              {renderDate(student.lastLetterTest)}
              <br />
              <OverlayTrigger
                placement={"top"}
                overlay={
                  <Tooltip>Click to test {student.name}'s letters</Tooltip>
                }
              >
                <Link
                  to={`/test-student/letters/${student.studentId}`}
                  className="underline-link"
                  onClick={() => studentTestActions.beginTest("letters")}
                >
                  Test
                </Link>
              </OverlayTrigger>
            </td>
            <td id="students-table">
              <div style={{ marginTop: 20 }}>
                <OverlayTrigger
                  placement={"top"}
                  overlay={
                    <Tooltip>
                      {student.name} knows {student.soundCount}/
                      {student.totalSoundCount} sounds
                    </Tooltip>
                  }
                >
                  <ProgressBar
                    now={(student.soundCount / student.totalSoundCount) * 100}
                  />
                </OverlayTrigger>
              </div>
            </td>
            <td id="students-table">
              {renderDate(student.lastSoundTest)}
              <br />
              <OverlayTrigger
                placement={"top"}
                overlay={
                  <Tooltip>Click to test {student.name}'s sounds</Tooltip>
                }
              >
                <Link
                  to={`/test-student/sounds/${student.studentId}`}
                  className="underline-link"
                  onClick={() => studentTestActions.beginTest("sounds")}
                >
                  Test
                </Link>
              </OverlayTrigger>
            </td>
          </tr>
        );
      })}
      <tr>
        <td id="students-table" colSpan="10">
          <a href="/add-student" className="link">
            + Click to add new student
          </a>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default StudentTable;
