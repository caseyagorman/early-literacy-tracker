import React, { Component } from "react";
import { connect } from "react-redux";
import * as studentsActions from "../../redux/actions/studentsActions";
import * as authActions from "../../redux/actions/authActions";
import AllStudents from "../../components/Students/AllStudents";

class ViewStudents extends Component {
  componentDidMount() {
    console.log("view students", this.props);
    if (localStorage.token) {
      this.props.authActions.checkUser(localStorage);
    } else {
      alert("Please log in");
      this.props.history.push("/login");
    }
  }

  getStudents(user) {
    if (!user) {
      return <div>loading user...</div>;
    }
    this.props.studentsActions.fetchStudents(user);
    this.displayAllStudents(this.props.students, user);
  }

  displayAllStudents(students, token) {
    console.log("display all students", students);
    if (!token) {
      return <div>loading...</div>;
    }
    return <AllStudents token={token} students={students} />;
  }

  render() {
    return this.getStudents(this.props.auth.user.token);
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
    studentsActions: studentsActions,
    dispatch,
    authActions: authActions,
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewStudents);
