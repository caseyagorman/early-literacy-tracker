import React from "react";
import { Link } from "react-router-dom";
import DeleteStudent from "../../containers/Forms/DeleteStudent";
import { Table } from "react-bootstrap";
const StudentTable = (
  students,
  onSort,
  route,
  itemType,
  studentTestActions
) => (
  <Table>
    {console.log("student test actions", studentTestActions)}
    <thead>
      <tr>
        <th onClick={e => onSort(e, "name")}>Name</th>
        <th onClick={e => onSort(e, "wordCount")}>
          Words Learned <br />
          <td />
        </th>
        <th onClick={e => onSort(e, "lastWordTest")}>Last Word Test</th>
        <th onClick={e => onSort(e, "letterCount")}>Letters Learned</th>
        <th onClick={e => onSort(e, "lastLetterTest")}>Last Letter Test</th>
        <th onClick={e => onSort(e, "soundCount")}>Sounds Learned</th>
        <th onClick={e => onSort(e, "lastSoundTest")}>Last Sound Test</th>
      </tr>
    </thead>
    <tbody>
      {students.map(function(student) {
        return (
          <tr key={student.student_id}>
            <td>
              <Link to={`/details/${student.studentId}`} className="link">
                <h4 id="student-name-table-header">{student.name}</h4>
              </Link>
              <DeleteStudent student={student.studentId} />
            </td>
            <td>
              {student.wordCount}/{student.totalWordCount}
            </td>
            <td>
              {" "}
              {student.lastWordTest}
              <br />
              <Link
                to={`/test-student/words/${student.studentId}`}
                className="link"
                onClick={() => studentTestActions.beginTest("words")}
              >
                Test Words
              </Link>
            </td>
            <td>
              {student.letterCount}/{student.totalLetterCount}
            </td>
            <td>
              {" "}
              {student.lastLetterTest}
              <br />
              <Link
                to={`/test-student/letters/${student.studentId}`}
                onClick={() => studentTestActions.beginTest("letters")}
                className="link"
              >
                Test Letters
              </Link>
            </td>
            <td>
              {student.soundCount}/{student.totalSoundCount}
            </td>
            <td>
              {" "}
              {student.lastSoundTest}
              <br />
              <Link
                to={`/test-student/sounds/${student.studentId}`}
                className="link"
                onClick={() => studentTestActions.beginTest("sounds")}
              >
                Test Sounds
              </Link>
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
