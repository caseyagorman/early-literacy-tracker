import React from "react";
import { Link } from "react-router-dom";
import DeleteStudent from "../../containers/Forms/DeleteStudent";
import { Table } from "react-bootstrap";
const StudentTable = (students, onSort) => (
  <div className="student-table">
    {console.log("students table", students)}
    <Table>
      <thead>
        <tr>
          <td>Students</td>
        </tr>
      </thead>
      <thead>
        <tr>
          <th onClick={e => onSort(e, "name")}>Name</th>
          <th onClick={e => onSort(e, "links")}>Links</th>
          <th onClick={e => onSort(e, "wordCount")}>Words Learned</th>
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
                  <h2 id="student-name-table-header">{student.name}</h2>
                </Link>
                {console.log("delete student", student.studentId)}
                <DeleteStudent student={student.studentId} />
              </td>
              <td>Link here</td>
              <td>
                {student.wordCount}/{student.totalWordCount}
              </td>
              <td> {student.lastWordTest}</td>
              <td>
                {student.letterCount}/{student.totalLetterCount}
              </td>
              <td> {student.lastLetterTest}</td>
              <td>
                {student.soundCount}/{student.totalSoundCount}
              </td>
              <td> {student.lastSoundTest}</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan="8">
            <a href="/add-student" className="link">
              + Click to add new student
            </a>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default StudentTable;
