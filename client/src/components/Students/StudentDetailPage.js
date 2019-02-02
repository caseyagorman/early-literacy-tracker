import React from "react";
import StudentSnapshot from "./StudentSnapshot";
import DeleteStudent from "../../containers/Forms/DeleteStudent";
import StudentDetailTable from "../Tables/StudentDetailTable";
import ClassAverageChart from "../../containers/Charts/ClassAverageChart";
import { Link } from "react-router-dom";
import DropdownBar from "./DropdownBar";
import { Grid, Col, Row } from "react-bootstrap";
import "./static/students.css";
const StudentDetailPage = props => (
  <div className="students">
    <Grid>
      <Row>
        <Col>
          <h1 id="student-name">{props.student.student.name}</h1>
          <DeleteStudent
            student={props.student.student.student_id}
            id="delete-student-detail"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <StudentSnapshot
            student={props.student}
            tests={props.tests}
            testSentences={props.testSentences}
            readingSentence={props.readingSentence}
          />
          <DropdownBar
            actionType={"Test Student"}
            wordAction={
              <Link
                to={`/test-student/words/${props.student.student.student_id}`}
                onClick={() => props.studentTestActions.beginTest("words")}
              >
                Test Words
              </Link>
            }
            letterAction={
              <Link
                to={`/test-student/letters/${props.student.student.student_id}`}
                onClick={() => props.studentTestActions.beginTest("letters")}
              >
                Test Words
              </Link>
            }
            soundAction={
              <Link
                to={`/test-student/sounds/${props.student.student.student_id}`}
                onClick={() => props.studentTestActions.beginTest("sounds")}
              >
                Test Words
              </Link>
            }
          />

          <DropdownBar
            actionType={"Add"}
            wordAction={
              <Link
                to={`/add-custom-items/${
                  props.student.student.student_id
                }/words`}
              >
                Add Words
              </Link>
            }
            letterAction={
              <Link
                to={`/add-custom-items/${
                  props.student.student.student_id
                }/letters`}
              >
                Add Letters
              </Link>
            }
            soundAction={
              <Link
                to={`/add-custom-items/${
                  props.student.student.student_id
                }/sounds`}
              >
                Add Sounds
              </Link>
            }
          />
          <DropdownBar
            actionType={"Test Results"}
            wordAction={
              <Link
                to={`/student-test-results/words/${
                  props.student.student.student_id
                }`}
              >
                Word Test Results
              </Link>
            }
            letterAction={
              <Link
                to={`/student-test-results/letters/${
                  props.student.student.student_id
                }`}
              >
                Letter Test Results
              </Link>
            }
            soundAction={
              <Link
                to={`/student-test-results/sounds/${
                  props.student.student.student_id
                }`}
              >
                Sound Test Results
              </Link>
            }
          />

          <Link
            to={`/assign-reading-level/${props.student.student.student_id}`}
          >
            <button className="reading-level-button">Reading Level</button>
          </Link>
        </Col>
        <Col>
          <div className="class-average-chart">
            <ClassAverageChart
              student={props.student}
              students={props.students}
            />
          </div>
        </Col>
      </Row>
    </Grid>

    <div
      style={{
        float: "left",
        marginLeft: "-700",
        marginTop: "220"
      }}
    />

    <br />
    <br />
    <div className="container">
      <StudentDetailTable student={props.student} />
    </div>
  </div>
);

export default StudentDetailPage;
