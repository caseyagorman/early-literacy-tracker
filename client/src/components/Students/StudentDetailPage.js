import React from "react";
import StudentSnapshot from "./StudentSnapshot";
import DeleteStudent from "../../containers/Forms/DeleteStudent";
import StudentDetailTable from "../Tables/StudentDetailTable";
import ClassAverageChart from "../../containers/Charts/ClassAverageChart";
import AssignReadingLevel from "../../containers/ReadingLevel/AssignReadingLevel";
import { Link } from "react-router-dom";
import DropdownBar from "./DropdownBar";
import { Grid, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
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
      <div
        style={{ float: "left", marginBottom: 100, height: 250, width: 500 }}
      >
        <Col>
          <StudentSnapshot
            groupSentence={props.groupSentence}
            student={props.student}
            e
            tests={props.tests}
            testSentences={props.testSentences}
            readingSentence={props.readingSentence}
          />

          <OverlayTrigger
            placement={"top"}
            overlay={
              <Tooltip>
                Test {props.student.student.name.split(" ")[0]}'s words,
                letters, or sounds
              </Tooltip>
            }
          >
            <div style={{ width: 110, display: "inline-block" }}>
              <DropdownBar
                actionType={"Test Student"}
                wordAction={
                  <Link
                    to={`/test-student/words/${
                      props.student.student.student_id
                    }`}
                    onClick={() => props.studentTestActions.beginTest("words")}
                  >
                    Test Words
                  </Link>
                }
                letterAction={
                  <Link
                    to={`/test-student/letters/${
                      props.student.student.student_id
                    }`}
                    onClick={() =>
                      props.studentTestActions.beginTest("letters")
                    }
                  >
                    Test Letters
                  </Link>
                }
                soundAction={
                  <Link
                    to={`/test-student/sounds/${
                      props.student.student.student_id
                    }`}
                    onClick={() => props.studentTestActions.beginTest("sounds")}
                  >
                    Test Sounds
                  </Link>
                }
              />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement={"top"}
            overlay={
              <Tooltip>
                View {props.student.student.name.split(" ")[0]}'s previous word,
                letter, and sound test results
              </Tooltip>
            }
          >
            <div style={{ width: 105, display: "inline-block" }}>
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
            </div>
          </OverlayTrigger>

          <div style={{ width: 60, display: "inline-block" }}>
            <OverlayTrigger
              placement={"top"}
              overlay={
                <Tooltip>
                  view {props.student.student.name.split(" ")[0]}'s data charts
                </Tooltip>
              }
            >
              <Link
                to={`/student-item-charts/${props.student.student.student_id}`}
              >
                <button
                  style={{ marginLeft: 1 }}
                  className="reading-level-button"
                >
                  Charts
                </button>
              </Link>
            </OverlayTrigger>
          </div>
          <OverlayTrigger
            placement={"top"}
            overlay={
              <Tooltip>
                Add custom words, letters, or sounds to{" "}
                {props.student.student.name.split(" ")[0]}
              </Tooltip>
            }
          >
            <div style={{ width: 110, display: "inline-block" }}>
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
          </OverlayTrigger>
          <AssignReadingLevel
            id={props.student.student.student_id}
            student={props.student.student.name.split(" ")[0]}
          />
        </Col>
      </div>
      <div style={{ float: "right", marginTop: 80 }}>
        <Col>
          <ClassAverageChart
            student={props.student}
            students={props.students}
          />
        </Col>
      </div>
    </Row>

    <Row>
      <StudentDetailTable student={props.student} />
    </Row>
  </Grid>
);

export default StudentDetailPage;
