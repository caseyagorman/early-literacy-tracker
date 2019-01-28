import React from "react";
import ItemBarChart from "../../containers/Charts/ItemBarChart";
import "./static/charts.css";
const ItemChartPage = props => (
  <div className="display-charts">
    <div>
      <h1>
        {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1, -1)}{" "}
        Charts
      </h1>
      <p>
        Hover over bar to view students learning each{" "}
        {props.itemType.slice(0, -1)}.{" "}
      </p>
    </div>
    <div className="bar-chart-div">
      <ItemBarChart
        items={props.items}
        itemType={props.itemType}
        chartType={"learned"}
      />
    </div>
    <div className="bar-chart-div">
      <ItemBarChart
        items={props.items}
        itemType={props.itemType}
        chartType={"unlearned"}
      />
    </div>
  </div>
);
export default ItemChartPage;
