import React from "react";
import { Link } from "react-router-dom";
import DeleteStudent from "../../containers/Forms/DeleteStudent";

const StudentTable = (students, onSort) => (
  <div className="student-table">
    <table>
      <thead>
        <tr>
          <td>Students</td>
        </tr>
      </thead>
      <thead>
        <tr>
          <th onClick={e => onSort(e, "fname")}>Name</th>
          <th onClick={e => onSort(e, "links")}>Links</th>
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
              <td>
                <Link to={`/details/${student.student_id}`} className="link" />
                <br />
                <Link to={`/#/${student.student_id}`} className="link" />
              </td>
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
    </table>
  </div>
);

export default StudentTable;
