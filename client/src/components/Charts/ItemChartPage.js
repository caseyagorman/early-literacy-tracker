import React from "react";
import ItemBarChart from "../../containers/Charts/ItemBarChart";
import { Grid, Col, Row } from "react-bootstrap";
const ItemChartPage = props => (
  <Grid>
    <Row>
      <Col>
        <div style={{ float: "left" }}>
          <ItemBarChart
            items={props.items}
            itemType={props.itemType}
            chartType={"learned"}
          />
        </div>
      </Col>
      <Col>
        <div style={{ float: "right" }}>
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
