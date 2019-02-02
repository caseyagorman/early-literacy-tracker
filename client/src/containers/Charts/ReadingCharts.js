import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as readingLevelActions from "../../redux/actions/readingLevelActions";
import ReadingLevelChartPage from "../../components/Charts/ReadingLevelChartPage";

class ReadingCharts extends Component {
  componentDidMount() {
    const user = this.props.auth.user.token;
    this.props.readingLevelActions.fetchStudentReadingLevels(user);
  }

  displayReadingLevelBarChart(readingLevels) {
    if (!readingLevels) {
      return <div>loading...</div>;
    }
    if (readingLevels === null) {
      return <div>sploading...</div>;
    }
    return <ReadingLevelChartPage readingLevels={readingLevels} />;
  }
  render() {
    return this.displayReadingLevelBarChart(this.props.readingLevels);
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
