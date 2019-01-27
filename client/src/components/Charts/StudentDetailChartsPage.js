import React from "react";
import StudentItemDoughnutChart from "../../containers/Charts/StudentItemDoughnutChart";
import StudentItemLineChart from "../../containers/Charts/StudentItemLineChart";

const StudentDetailChartsPage = props => (
  <div>
    <StudentItemDoughnutChart
      student={props.student}
      testResults={props.testResults}
      itemType={"words"}
    />
    <StudentItemDoughnutChart
      student={props.student}
      testResults={props.testResults}
      itemType={"letters"}
    />
    <StudentItemDoughnutChart
      student={props.student}
      testResults={props.testResults}
      itemType={"sounds"}
    />
    {/* <StudentItemLineChart
      student={props.student}
      testResults={props.testResults}
    />
    <StudentItemLineChart
      student={props.student}
      testResults={props.testResults}
    />
    <StudentItemLineChart
      student={props.student}
      testResults={props.testResults}
    />  */}

    {console.log("student detail charts page props", props)}
  </div>
);

export default StudentDetailChartsPage;
