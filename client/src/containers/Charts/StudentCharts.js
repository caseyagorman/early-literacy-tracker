import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../redux/actions/studentActions";
import StudentBarChart from "./StudentBarChart";

class StudentCharts extends Component {
  componentDidMount() {
    let studentId = this.props.match.params.id;
    if (!studentId) {
      return <div>loading...</div>;
    }
    const user = this.props.auth.user.token;
    this.props.studentsActions.fetchStudents(user);
  }

  displayBarChart(students) {
    if (!students) {
      return <div>loading...</div>;
    }
    return (
      <b>
        <StudentBarChart students={students} />
      </b>
    );
  }

  render() {
    return this.displayBarChart(this.props.students);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentActions: bindActionCreators(studentActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    students: state.students,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentCharts);
