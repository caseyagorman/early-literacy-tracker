import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as testResultsActions from "../../redux/actions/testResultsActions";
import React, { Component } from "react";
class StudentTestResults extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    const user = this.props.auth.user.token;
    const itemType = this.props.match.params.itemType;
    this.props.testResultsActions.fetchStudentTestResults(user, itemType, id);
  }

  displayTestResults(testResults) {
    if (!testResults) {
      return <div>loading...</div>;
    }
  }
  render() {
    return <div />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    testResultsActions: bindActionCreators(testResultsActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    student: state.student,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentTestResults);
