import React from "react";
import StudentBarChart from "../../containers/Charts/StudentBarChart";
import { Grid, Col, Row } from "react-bootstrap";
const StudentChartPage = props => (
  <Grid style={{ fontFamily: "Krub" }}>
    <Row>
      <div style={{ textAlign: "center" }}>
        <h1>Student Data</h1>
        <p>
          Hover over bars to view {props.itemType} each student is learning{" "}
        </p>
      </div>
    </Row>
    <Row>
      <Col>
        {/* <div style={{ marginLeft: -200, float: "left" }}> */}
        <StudentBarChart
          students={props.students.students}
          itemType={props.itemType}
          chartType={"learned"}
        />
        {/* </div> */}
      </Col>
      <Col>
        {/* <div style={{ marginRight: -200, float: "right" }}> */}
        <StudentBarChart
          students={props.students.students}
          itemType={props.itemType}
          chartType={"unlearned"}
        />
        {/* </div> */}
      </Col>
    </Row>
  </Grid>
);
export default StudentChartPage;
