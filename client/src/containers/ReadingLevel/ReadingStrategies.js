import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as readingLevelActions from "../../redux/actions/readingLevelActions";

class ReadingGroups extends Component {
  componentDidMount() {
    const user = this.props.auth.user.token;
    this.props.readingLevelActions.fetchStudentReadingLevels(user);
  }

  displayReadingStrategies(readingLevels) {
    if (!readingLevels) {
      return <div />;
    }
    if (readingLevels === null) {
      return <div />;
    }
    return <div />;
  }
  render() {
    return this.displayReadingStrategies(this.props.readingLevels);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    readingLevelActions: bindActionCreators(readingLevelActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    readingLevels: state.readingLevels,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadingCharts);
