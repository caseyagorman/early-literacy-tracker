import React from "react";
import StudentItemDoughnutChart from "../../containers/Charts/StudentItemDoughnutChart";
import StudentItemLineChart from "../../containers/Charts/StudentItemLineChart";
import { Row, Col } from "react-bootstrap";
const StudentDetailChartsPage = props => (
  <div>
    <Row>
      <Col lg="4">
        <StudentItemDoughnutChart
          student={props.student}
          testResults={props.testResults}
          itemType={"words"}
        />
      </Col>
      <Col lg="4">
        <StudentItemDoughnutChart
          student={props.student}
          testResults={props.testResults}
          itemType={"letters"}
        />
      </Col>
      <Col lg="4">
        <StudentItemDoughnutChart
          student={props.student}
          testResults={props.testResults}
          itemType={"sounds"}
        />
      </Col>
    </Row>
    <br />
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

    {console.log("student detail charts page props", props)}
  </div>
);

export default StudentDetailChartsPage;
