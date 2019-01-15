import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentsActions from "../../redux/actions/studentsActions";
import StudentDetailPage from "../../components/Students/StudentDetailPage";

class StudentDetail extends Component {
  componentDidMount() {
    if (!this.props.id) {
      return <div>loading...</div>;
    }
    const student = this.props.id;
    const user = this.props.token;
    this.props.studentsActions.fetchStudent(student, user);
  }
  displayStudentDetailPage(student) {
    if (!student) {
      return <div>loading...</div>;
    }
    return <StudentDetailPage />;
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
