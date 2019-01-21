import React from "react";
import { Link } from "react-router-dom";
import DeleteStudent from "../../containers/Forms/DeleteStudent";
import { Table } from "react-bootstrap";
const StudentTable = (students, onSort) => (
  <div className="student-table">
    <Table>
      <thead>
        <tr>
          <td>Students</td>
        </tr>
      </thead>
      <thead>
        <tr>
          <th onClick={e => onSort(e, "fname")}>Name</th>
          <th onClick={e => onSort(e, "links")}>Links</th>
          <th onClick={e => onSort(e, "word_count")}>Words Learned</th>
          <th onClick={e => onSort(e, "last_word_test")}>Last Word Test</th>
          <th onClick={e => onSort(e, "letter_count")}>Letters Learned</th>
          <th onClick={e => onSort(e, "last_letter_test")}>Last Letter Test</th>
          <th onClick={e => onSort(e, "sound_count")}>Sounds Learned</th>
          <th onClick={e => onSort(e, "last_sound_test")}>Last Sound Test</th>
        </tr>
      </thead>
      <tbody>
        {students.map(function(student) {
          return (
            <tr key={student.student_id}>
              <td>
                <Link to={`/details/${student.student_id}`} className="link">
                  <h2 id="student-name-table-header">
                    {student.fname}
                    <span> </span>
                    {student.lname}
                  </h2>
                </Link>
                <DeleteStudent student={student} />
              </td>
              <td>Link here</td>
              <td>
                {student.word_count}/{student.total_word_count}
              </td>
              <td> {student.last_word_test}</td>
              <td>
                {student.letter_count}/{student.letter_word_count}
              </td>
              <td> {student.last_letter_test}</td>
              <td>
                {student.sound_count}/{student.sound_word_count}
              </td>
              <td> {student.last_sound_test}</td>
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
