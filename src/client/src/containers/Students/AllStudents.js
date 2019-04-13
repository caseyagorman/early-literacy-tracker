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
    if (!user) {
      this.props.history.push("/login/");
    }
    this.props.studentsActions.fetchStudents(user);
  }

  displayAllStudents(students, token) {
    if (!token || !students) {
      return <div />;
    }
    if (students.students === null) {
      return <div />;
    }
    let oldStudents = students.students;
    oldStudents = Object.values(oldStudents);
    students = [];
    for (let i = 0; i < oldStudents.length; i++) {
      if (
        oldStudents[i].lastLetterTest ||
        oldStudents[i].lastWordTest ||
        oldStudents[i].lastSoundTest ||
        oldStudents[i].lastReadingLevelUpdate
      ) {
      }
      students.push(oldStudents[i]);
    }

    return (
      <AllStudentsPage
        studentTestActions={this.props.studentTestActions}
        students={students}
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
