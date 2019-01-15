import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentsActions from "../../redux/actions/studentsActions";
import StudentDetailPage from "../../components/Students/StudentDetailPage";

class StudentDetail extends Component {
  componentDidMount() {
    console.log(this.props);
    let studentId = this.props.match.params.id;
    if (!studentId) {
      return <div>loading...</div>;
    }
    const user = this.props.auth.user.token;
    this.props.studentsActions.fetchStudent(studentId, user);
  }
  displayStudentDetailPage(student) {
    if (!student) {
      return <div>loading...</div>;
    }
    return <StudentDetailPage student={student} />;
  }

  render() {
    return this.displayStudentDetailPage(this.props.student);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentsActions: bindActionCreators(studentsActions, dispatch)
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
)(StudentDetail);
