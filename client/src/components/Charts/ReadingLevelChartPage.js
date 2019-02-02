import React from "react";
import ReadingBarChart from "../../containers/Charts/ReadingBarChart";
import { Grid, Col, Row } from "react-bootstrap";
const ReadingLevelChartPage = props => (
  <Grid style={{ fontFamily: "Krub" }}>
    <Row>
      <div style={{ textAlign: "center" }}>
        <h1>Reading Level Data</h1>
        <p>Hover over bars to view students at each reading level</p>
      </div>
    </Row>
    <Row>
      <Col>
        <div>
          <ReadingBarChart readingLevels={props.readingLevels} />
        </div>
      </Col>
    </Row>
  </Grid>
);
export default ReadingLevelChartPage;
