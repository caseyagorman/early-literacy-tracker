import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as testResultsActions from "../../redux/actions/testResultsActions";
import React, { Component } from "react";
import TestResultsTable from "../../components/Tables/TestResultsTable";
import TableContainer from "../Tables/TableContainer";
import StudentItemLineChart from "../Charts/StudentItemLineChart";
import StudentTestResultsPage from "../../components/TestResults/StudentTestResultsPage";
import CorrectCountsTable from "../../components/Tables/CorrectCountsTable";
class StudentTestResults extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    const user = this.props.auth.user.token;
    const itemType = this.props.match.params.itemType;
    this.props.testResultsActions.fetchTestResults(user, itemType, id);
  }

  displayTestResultsPage(testResults) {
    console.log("test results", testResults);
    if (!testResults.itemCounts) {
      return <div>loading...</div>;
    }
    if (testResults.itemCounts) {
    }
    const itemType = this.props.match.params.itemType;
    return (
      <div className="container">
        <StudentTestResultsPage itemType={itemType} />
        <TableContainer
          renderTable={TestResultsTable}
          tableElements={testResults.studentTestList}
        />
        <TableContainer
          renderTable={CorrectCountsTable}
          tableElements={testResults.itemCounts}
        />
        <StudentItemLineChart
          testResults={testResults.studentTestList}
          itemType={itemType}
        />
        ;
      </div>
    );
  }

  render() {
    return this.displayTestResultsPage(this.props.testResults);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    testResultsActions: bindActionCreators(testResultsActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    testResults: state.testResults,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentTestResults);
