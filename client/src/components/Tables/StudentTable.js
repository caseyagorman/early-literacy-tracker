import React from "react";
import { Link } from "react-router-dom";
import DeleteStudent from "../../containers/Forms/DeleteStudent";
import { Table, OverlayTrigger, Tooltip, ProgressBar } from "react-bootstrap";
const StudentTable = (
  students,
  onSort,
  route,
  itemType,
  studentTestActions
) => (
  <Table bordered>
    {console.log("students", students)}
    <thead>
      <tr>
        <th onClick={e => onSort(e, "name")}>Name </th>
        <th onClick={e => onSort(e, "wordCount")}>
          Words Learned <br />
          <td />
        </th>
        <th onClick={e => onSort(e, "lastWordTest")}>Last Word Test </th>
        <th onClick={e => onSort(e, "letterCount")}>Letters Learned </th>
        <th onClick={e => onSort(e, "lastLetterTest")}>Last Letter Test </th>
        <th onClick={e => onSort(e, "soundCount")}>Sounds Learned </th>
        <th onClick={e => onSort(e, "lastSoundTest")}>Last Sound Test </th>
      </tr>
    </thead>
    <tbody className="students-table">
      {students.map(function(student) {
        return (
          <tr key={student.student_id}>
            <td>
              <OverlayTrigger
                placement={"top"}
                overlay={<Tooltip>view {student.name}'s data</Tooltip>}
              >
                <Link to={`/details/${student.studentId}`} className="link">
                  <h3 id="student-name-table-header">{student.name}</h3>
                </Link>
              </OverlayTrigger>
              <DeleteStudent student={student.studentId} />
            </td>
            <td>
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
                  animated
                  now={(student.wordCount / student.totalWordCount) * 100}
                />
              </OverlayTrigger>
            </td>
            <td>
              {" "}
              {student.lastWordTest}
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
                  Test Words
                </Link>
              </OverlayTrigger>
            </td>
            <td>
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
                  animated
                  now={(student.letterCount / student.totalLetterCount) * 100}
                />
              </OverlayTrigger>
            </td>
            <td>
              {" "}
              {student.lastLetterTest}
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
                  Test Letters
                </Link>
              </OverlayTrigger>
            </td>
            <td>
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
                  animated
                  now={(student.soundCount / student.totalSoundCount) * 100}
                />
              </OverlayTrigger>
            </td>
            <td>
              {" "}
              {student.lastSoundTest}
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
                  Test Sounds
                </Link>
              </OverlayTrigger>
            </td>
          </tr>
        );
      })}
      <tr>
        <td colSpan="7">
          <a href="/add-student" className="link">
            + Click to add new student
          </a>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default StudentTable;
