import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../redux/actions/studentActions";
import StudentItemDoughnutChart from "./StudentItemDoughnutChart";
import * as testResultsActions from "../../redux/actions/testResultsActions";

class StudentDetailCharts extends Component {
  componentDidMount() {
    let studentId = this.props.match.params.id;
    if (!studentId) {
      return <div>loading...</div>;
    }
    const user = this.props.auth.user.token;
    this.props.studentActions.fetchStudent(studentId, user);
    this.props.testResultsActions.fetchTestResults(user, "words", studentId);
    this.props.testResultsActions.fetchTestResults(user, "letters", studentId);
    this.props.testResultsActions.fetchTestResults(user, "sounds", studentId);
  }

  displayDoughnutChart(student) {
    if (!student) {
      return <div>loading...</div>;
    }
    if (student.student === null) {
      return <div> loading...</div>;
    }
    return (
      <b>
        <StudentItemDoughnutChart student={student} itemType={"words"} />
        <StudentItemDoughnutChart student={student} itemType={"letters"} />
        <StudentItemDoughnutChart student={student} itemType={"sounds"} />
      </b>
    );
  }
  displayTestResults(testResults) {
    console.log("test results", testResults);
    if (!testResults) {
      return <div>loading...</div>;
    }
    return <div />;
    //   return   (<StudentTestResultsPage
    //   itemType={itemType}
    //   CorrectCountsTable={CorrectCountsTable}
    //   correctCountsTableElements={testResults.itemCounts}
    //   TestResultsTable={TestResultsTable}
    //   testResultsTableElements={testResults.studentTestList}
    //   testResults={testResults.studentTestList}
    // />)
  }

  render() {
    return (
      this.displayDoughnutChart(this.props.student),
      this.displayTestResults(this.props.testResults)
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentActions: bindActionCreators(studentActions, dispatch),
    testResultsActions: bindActionCreators(testResultsActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    testResults: state.testResults,
    student: state.student,
    auth: state.auth
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetailCharts);
