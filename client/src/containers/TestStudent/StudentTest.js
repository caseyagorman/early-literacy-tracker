import TestStudentPage from "../../components/TestStudent/StudentTestPage";

import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentTestActions from "../../redux/actions/studentTestActions";
import StudentTestPage from "../../components/TestStudent/StudentTestPage";

class TestStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentTestItems: this.props.studentTestItems,
      idx: 0
    };
  }

  componentDidMount() {
    console.log("Test Page Props", this.props);
  }

  displayLetter(studentTestItems) {
    if (!studentTestItems) {
      return <div className="test-complete-message">test complete</div>;
    }

    return studentTestItems;
  }

  incrementIdx(idx) {
    let new_idx = idx + 1;
    this.setState({ idx: new_idx });
  }

  endTest(e) {
    e.preventDefault();

    this.props.studentTestActions.submitStudentTest(
      this.props.studentTest.testItems,
      this.props.studentTest.testType,
      this.props.student[0].student_id,
      this.props.user
    );
  }

  handleTestClick(e, studentTestItems, idx) {
    e.preventDefault();
    this.incrementIdx(idx);

    const answeredCorrectly = e.target.value === "yes";
    this.props.studentTestActions.answerQuestion(
      studentTestItems,
      answeredCorrectly
    );
  }

  render() {
    const studentTestItems = this.state.studentTestItems;
    const idx = this.state.idx;
    return <StudentTestPage idx={idx} studentTestItems={studentTestItems} />;
  }
}

const TestStudentPageWrapped = withRouter(TestStudentPage);

function mapStateToProps(state) {
  return {
    studentTest: state.studentTest
  };
}

function mapDispatchToProps(dispatch) {
  return {
    studentTestActions: bindActionCreators(studentTestActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestStudentPageWrapped);
