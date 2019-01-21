import React from "react";
import ItemBarChart from "../../containers/Charts/ItemBarChart";

const ItemChartPage = props => (
  <div>
    {props.itemType} Charts
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
);
export default ItemChartPage;
