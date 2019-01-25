import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../redux/actions/studentActions";
import * as studentTestActions from "../../redux/actions/studentTestActions";
import * as testResultsActions from "../../redux/actions/testResultsActions";
import StudentDetailPage from "../../components/Students/StudentDetailPage";
class StudentDetail extends Component {
  componentDidMount() {
    let studentId = this.props.match.params.id;
    if (!studentId) {
      return <div>loading...</div>;
    }
    const user = this.props.auth.user.token;
    this.props.studentActions.fetchStudent(studentId, user);
    this.props.testResultsActions.fetchAllTestResults(studentId, user);
  }

  getTestSentence(tests) {
    console.log("test", tests);
    let sentenceList = [];
    for (let key in tests) {
      let test = tests[key];
      console.log("test key", test);
      if (test.length === 0) {
        let testSentence =
          this.props.student.student.name +
          " has no " +
          key.slice(0, -4) +
          " tests yet.";
        sentenceList.push(testSentence);
      }
      if (test.correctItems) {
        let testSentence =
          this.props.student.student.name +
          "'s last " +
          test.testType +
          " test was " +
          test.testDate.slice(0, 17) +
          "and they scored " +
          test.score +
          "%.";
        sentenceList.push(testSentence);
      }
    }
    return sentenceList;
  }

  displayStudentDetailPage(student, tests) {
    if (!student) {
      return <div>loading...</div>;
    }
    if (student.student === null) {
      return <div>loading...</div>;
    }

    let testSentences = this.getTestSentence(tests);

    return (
      <StudentDetailPage
        tests={tests}
        student={student}
        testSentences={testSentences}
        studentTestActions={this.props.studentTestActions}
      />
    );
  }

  render() {
    return this.displayStudentDetailPage(
      this.props.student,
      this.props.testResults
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentActions: bindActionCreators(studentActions, dispatch),
    studentTestActions: bindActionCreators(studentTestActions, dispatch),
    testResultsActions: bindActionCreators(testResultsActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    student: state.student,
    studentTest: state.studentTest,
    testResults: state.testResults,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
