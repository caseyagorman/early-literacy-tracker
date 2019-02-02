import React from "react";
import StudentItemDoughnutChart from "../../containers/Charts/StudentItemDoughnutChart";
import StudentItemLineChart from "../../containers/Charts/StudentItemLineChart";
import { Row, Col } from "react-bootstrap";
const StudentDetailChartsPage = props => (
  <div className="student-detail-charts-page">
    <h1>
      <b>{props.student.student.name}'s Data</b>
    </h1>
    <p>
      Hover over chart to view items {props.student.student.name} is learning.
    </p>
    <Row>
      <Col lg="4">
        <h3> Words</h3>
        <StudentItemDoughnutChart
          student={props.student}
          testResults={props.testResults}
          itemType={"words"}
        />
      </Col>
      <Col lg="4">
        <h3> Letters</h3>
        <StudentItemDoughnutChart
          student={props.student}
          testResults={props.testResults}
          itemType={"letters"}
        />
      </Col>
      <Col lg="4">
        <h3> Sounds</h3>
        <StudentItemDoughnutChart
          student={props.student}
          testResults={props.testResults}
          itemType={"sounds"}
        />
      </Col>
    </Row>
    <br />
    <p>
      Hover over chart to view {props.student.student.name}'s scores on dates
      listed.
    </p>
    <Row>
      <Col lg="4">
        <StudentItemLineChart
          id="student-line-chart"
          student={props.student}
          testResults={props.testResults}
          itemType={"words"}
        />
      </Col>
      <Col lg="4">
        <StudentItemLineChart
          id="student-line-chart"
          student={props.student}
          testResults={props.testResults}
          itemType={"letters"}
        />
      </Col>
      <Col lg="4">
        <StudentItemLineChart
          id="student-line-chart"
          student={props.student}
          testResults={props.testResults}
          itemType={"sounds"}
        />
      </Col>
    </Row>
  </div>
);

export default StudentDetailChartsPage;
