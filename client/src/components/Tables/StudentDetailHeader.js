import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const StudentDetailHeader = student => (
  <div className="student-table">
    <Table bordered>
      <tr>
        <td>
          <Link
            to={`/student-item-charts/${student.student.student.student_id}`}
            className="link"
            student={student.student}
          >
            + Click to view data charts
          </Link>
        </td>
        <td>
          <Link
            to={`/student-test-results/words/${
              student.student.student.student_id
            }`}
            className="link"
          >
            + Click to view past word tests
          </Link>
        </td>
        <td />
        <td>
          <Link
            to={`/student-test-results/letters/${
              student.student.student.student_id
            }`}
            className="link"
          >
            + Click to view past letter tests
          </Link>
        </td>
        <td>
          <td>
            <Link
              to={`/student-test-results/sounds/${
                student.student.student.student_id
              }`}
              className="link"
            >
              + Click to view past sound tests
            </Link>
          </td>
        </td>
        <td />
      </tr>
    </Table>
    <Table bordered>
      <tr>
        <td>
          <a href="/students" className="link">
            + Click to view students
          </a>
        </td>
        <td>
          <a href="/add-items/words" className="link">
            + Click to add new words
          </a>
        </td>
        <td />
        <td>
          <a href="/add-items/letters" className="link">
            + Click to add new letters
          </a>
        </td>
        <td />
        <td>
          <a href="/add-items/sounds" className="link">
            + Click to add new sounds
          </a>
        </td>
      </tr>
    </Table>
  </div>
);
export default StudentDetailHeader;
