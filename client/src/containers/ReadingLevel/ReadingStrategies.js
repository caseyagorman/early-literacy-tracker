import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as readingLevelActions from "../../redux/actions/readingLevelActions";
// import ReadingStrategiesPage from "../../components/ReadingStrategies/ReadingStrategiesPage";

class ReadingGroups extends Component {
  componentDidMount() {
    const user = this.props.auth.user.token;
    this.props.readingLevelActions.fetchStudentReadingLevels(user);
  }

  displayReadingStrategies(readingLevels) {
    if (!readingLevels) {
      return <div>loading...</div>;
    }
    if (readingLevels === null) {
      return <div>sploading...</div>;
    }
    return <div />;
    // return <ReadingStrategiesPage readingLevels={readingLevels} />;
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
