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
  displayStudentDetailPage(student, tests) {
    if (!student) {
      return <div>loading...</div>;
    }
    if (student.student === null) {
      return <div>loading...</div>;
    }
    let testsSentence = "";
    for (let key in tests) {
      console.log("tests", tests[key]);
      if (tests[key].length === 0) {
        console.log("something");
        //  testsSentence = testsSentence + this.props.student.student.name
      }
    }
    return (
      <StudentDetailPage
        tests={tests}
        student={student}
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
