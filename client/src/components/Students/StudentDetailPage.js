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
  <Grid style={{ fontFamily: "Krub" }}>
    <Row>
      <Col>
        <h1 style={{ display: "inline-block" }}>
          {props.student.student.name}
        </h1>
        <DeleteStudent
          student={props.student.student.student_id}
          style={{ display: "inline-block" }}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <div style={{ float: "left", marginBottom: 100 }}>
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
                Test Letters
              </Link>
            }
            soundAction={
              <Link
                to={`/test-student/sounds/${props.student.student.student_id}`}
                onClick={() => props.studentTestActions.beginTest("sounds")}
              >
                Test Sounds
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
          <Link to={`/student-item-charts/${props.student.student.student_id}`}>
            <button style={{ marginLeft: 1 }} className="reading-level-button">
              Charts
            </button>
          </Link>
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
        </div>
      </Col>
      <Col>
        <div style={{ float: "right", marginTop: 30 }}>
          <ClassAverageChart
            student={props.student}
            students={props.students}
          />
        </div>
      </Col>
    </Row>
    <Row>
      <StudentDetailTable student={props.student} />
    </Row>
  </Grid>
);

export default StudentDetailPage;
