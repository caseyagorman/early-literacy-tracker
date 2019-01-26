import React from "react";
import ItemBarChart from "../../containers/Charts/ItemBarChart";
import "./static/charts.css";
const ItemChartPage = props => (
  <div className="container">
    <div className="display-charts">
      {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1)} Charts
      <p>
        Hover over bar to view students learning each{" "}
        {props.itemType.slice(0, -1)}.{" "}
      </p>
      <ItemBarChart
        items={props.items}
        itemType={props.itemType}
        chartType={"learned"}
      />
      <ItemBarChart
        items={props.items}
        itemType={props.itemType}
        chartType={"unlearned"}
      />
    </div>
  </div>
);
export default ItemChartPage;
