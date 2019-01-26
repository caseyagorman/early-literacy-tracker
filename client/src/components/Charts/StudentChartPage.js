import React from "react";
import StudentBarChart from "../../containers/Charts/StudentBarChart";

const StudentChartPage = props => (
  <div className="container">
    <div className="display-charts">
      {props.itemType.charAt(0).toUpperCase() + props.itemType.slice(1)} Charts
      <p>Hover over bar to view students learning each letter.</p>
      <StudentBarChart
        students={props.students.students}
        itemType={props.itemType}
        chartType={"learned"}
      />
      <div />
      <StudentBarChart
        students={props.students.students}
        itemType={props.itemType}
        chartType={"unlearned"}
      />
    </div>
  </div>
);
export default StudentChartPage;
