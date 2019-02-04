import React, { Component } from "react";
import { connect } from "react-redux";
import * as studentsActions from "../../redux/actions/studentsActions";
import * as authActions from "../../redux/actions/authActions";
import * as studentTestActions from "../../redux/actions/studentTestActions";
import AllStudentsPage from "../../components/Students/AllStudentsPage";
import { bindActionCreators } from "redux";

class AllStudents extends Component {
  componentDidMount() {
    const user = this.props.auth.user.token;
    this.props.studentsActions.fetchStudents(user);
  }

  displayAllStudents(students, token) {
    if (!token || !students) {
      return <div />;
    }
    if (students.students === null) {
      return <div />;
    }
    console.log(students);
    return (
      <AllStudentsPage
        studentTestActions={this.props.studentTestActions}
        students={students.students}
      />
    );
  }

  render() {
    return this.displayAllStudents(
      this.props.students,
      this.props.auth.user.token
    );
  }
}
function mapStateToProps(state) {
  return {
    students: state.students,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    studentsActions: bindActionCreators(studentsActions, dispatch),
    studentTestActions: bindActionCreators(studentTestActions, dispatch),
    authActions: authActions
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudents);
