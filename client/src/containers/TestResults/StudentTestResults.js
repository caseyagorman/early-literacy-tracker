import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as testResultsActions from "../../redux/actions/testResultsActions";
import React, { Component } from "react";
import TestResultsTable from "../../components/Tables/TestResultsTable";
import TableContainer from "../Tables/TableContainer";
class StudentTestResults extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    const user = this.props.auth.user.token;
    const itemType = this.props.match.params.itemType;
    this.props.testResultsActions.fetchTestResults(user, itemType, id);
  }

  displayTestResults(testResults) {
    console.log("display test results", testResults);
    if (!testResults.itemCounts) {
      return <div>loading...</div>;
    }
    if (testResults.itemCounts) {
      return (
        <TableContainer
          renderTable={TestResultsTable}
          tableElements={testResults.studentTestList}
        />
      );
    }
  }
  render() {
    return this.displayTestResults(this.props.testResults);
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
