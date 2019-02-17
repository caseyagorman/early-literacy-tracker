import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../redux/actions/studentActions";
import * as testResultsActions from "../../redux/actions/testResultsActions";
import StudentDetailChartsPage from "../../components/Charts/StudentDetailChartsPage";

class StudentDetailCharts extends Component {
  componentDidMount() {
    let studentId = this.props.match.params.id;
    if (!studentId) {
      return <div />;
    }
    const user = this.props.auth.user.token;
    this.props.studentActions.fetchStudent(studentId, user);
    this.props.testResultsActions.fetchAllTestResults(studentId, user);
  }

  displayChartsPage(student, testResults) {
    console.log("test results", testResults);
    if (student.student === null) {
      return <div />;
    }
    if (testResults === null) {
      return <div />;
    }
    return (
      <StudentDetailChartsPage student={student} testResults={testResults} />
    );
  }

  render() {
    return this.displayChartsPage(this.props.student, this.props.testResults);
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
