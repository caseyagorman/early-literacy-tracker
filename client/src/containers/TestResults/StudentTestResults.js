import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as testResultsActions from "../../redux/actions/testResultsActions";
import React, { Component } from "react";
import TestResultsTable from "../../components/Tables/TestResultsTable";
import StudentTestResultsPage from "../../components/TestResults/StudentTestResultsPage";
import CorrectCountsTable from "../../components/Tables/CorrectCountsTable";
class StudentTestResults extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    const user = this.props.auth.user.token;
    this.props.testResultsActions.fetchAllTestResults(id, user);
  }

  displayTestResultsPage(testResults) {
    console.log("test results", testResults);

    if (!testResults.testData) {
      return <div>loading...</div>;
    }
    if (testResults.testData) {
    }
    const itemType = this.props.match.params.itemType;
    console.log(itemType);
    return (
      <div className="container">
        {console.log(
          "testResults.testData",
          testResults.testData[itemType].itemCounts
        )}
        <StudentTestResultsPage
          itemType={itemType}
          CorrectCountsTable={CorrectCountsTable}
          correctCountsTableElements={testResults.testData[itemType].itemCounts}
          TestResultsTable={TestResultsTable}
          testResultsTableElements={
            testResults.testData[itemType].learnedItemList
          }
          testResults={testResults.testData[itemType].studentList}
        />
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
