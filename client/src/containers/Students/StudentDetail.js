import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../redux/actions/studentActions";
import * as studentTestActions from "../../redux/actions/studentTestActions";
import StudentDetailPage from "../../components/Students/StudentDetailPage";

class StudentDetail extends Component {
  componentDidMount() {
    let studentId = this.props.match.params.id;
    if (!studentId) {
      return <div>loading...</div>;
    }
    const user = this.props.auth.user.token;
    this.props.studentActions.fetchStudent(studentId, user);
  }
  displayStudentDetailPage(student) {
    if (!student) {
      return <div>loading...</div>;
    }
    if (student.student === null) {
      return <div>loading...</div>;
    }
    return (
      <StudentDetailPage
        student={student}
        studentTestActions={this.props.studentTestActions}
      />
    );
  }

  render() {
    return this.displayStudentDetailPage(this.props.student);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentActions: bindActionCreators(studentActions, dispatch),
    studentTestActions: bindActionCreators(studentTestActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    student: state.student,
    studentTest: state.studentTest,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
