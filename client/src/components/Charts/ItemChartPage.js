import React from "react";
import ItemBarChart from "../../containers/Charts/ItemBarChart";
import { Grid, Col, Row } from "react-bootstrap";
const ItemChartPage = props => (
  <Grid style={{ fontFamily: "Krub" }}>
    <Row>
      <div style={{ textAlign: "center" }}>
        <h1>
          {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1, -1)}{" "}
          Data
        </h1>
        <p>
          Hover over bars to view students learning each{" "}
          {props.itemType.slice(0, -1)}
        </p>
      </div>
    </Row>
    <Row>
      <Col>
        <div>
          <ItemBarChart
            items={props.items}
            itemType={props.itemType}
            chartType={"learned"}
          />
        </div>
      </Col>
      <Col>
        <div>
          <ItemBarChart
            items={props.items}
            itemType={props.itemType}
            chartType={"unlearned"}
          />
        </div>
      </Col>
    </Row>
  </Grid>
);
export default ItemChartPage;
