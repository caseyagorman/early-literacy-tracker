import React from "react";
import StudentBarChart from "../../containers/Charts/StudentBarChart";

const StudentChartPage = props => (
  <div className="container">
    {props.itemType} Charts
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
);
export default StudentChartPage;
