import React from "react";
import StudentBarChart from "../../containers/Charts/StudentBarChart";
import { Grid, Col, Row } from "react-bootstrap";
const StudentChartPage = props => (
  <Grid>
    <Row>
      <Col>
        <div style={{ float: "left" }}>
          <StudentBarChart
            students={props.students.students}
            itemType={props.itemType}
            chartType={"learned"}
          />
        </div>
      </Col>
      <Col>
        <div style={{ float: "right" }}>
          <StudentBarChart
            students={props.students.students}
            itemType={props.itemType}
            chartType={"unlearned"}
          />
        </div>
      </Col>
    </Row>
  </Grid>
);
export default StudentChartPage;
