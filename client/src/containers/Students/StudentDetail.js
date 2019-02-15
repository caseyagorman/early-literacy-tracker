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
      return <div />;
    }
    const user = this.props.auth.user.token;
    this.props.studentActions.fetchStudent(studentId, user);
    this.props.testResultsActions.fetchAllTestResults(studentId, user);
  }
  getReadingSentence(student) {
    let readingSentence;
    if (student.readingLevel) {
      readingSentence =
        student.name.split(" ")[0] +
        " is reading at a level " +
        student.readingLevel +
        ".";
    } else if (student.readingLevel === "") {
      readingSentence =
        student.name.split(" ")[0] + " has no reading level yet.";
    }
    return readingSentence;
  }
  getTestSentence(tests) {
    let name = this.props.student.name.split(" ")[0];
    let sentenceList = [];
    for (let key in tests) {
      let test = tests[key];
      if (test.length === 0) {
        let testSentence = name + " has no " + key.slice(0, -4) + " tests yet.";
        sentenceList.push(testSentence);
      }
      if (test.correctItems) {
        let testSentence =
          name +
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
  getGroup(student) {
    let groupSentence;
    let name = this.props.student.name.split(" ")[0];
    if (student.group) {
      groupSentence = `${name} is in the ${student.group}.`;
    } else {
      groupSentence = `${name} has no assigned group yet.`;
    }
    return groupSentence;
  }

  displayStudentDetailPage(student, tests) {
    if (!student || !tests) {
      return <div />;
    }
    if (student.student === null) {
      return <div />;
    }
    let testSentences = this.getTestSentence(tests);
    let readingSentence = this.getReadingSentence(student);
    let groupSentence = this.getGroup(student);

    return (
      <StudentDetailPage
        groupSentence={groupSentence}
        tests={tests}
        student={student}
        testSentences={testSentences}
        studentTestActions={this.props.studentTestActions}
        readingSentence={readingSentence}
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
    students: state.students,
    studentTest: state.studentTest,
    testResults: state.testResults,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
