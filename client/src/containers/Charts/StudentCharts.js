import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentsActions from "../../redux/actions/studentsActions";
import StudentChartPage from "../../components/Charts/StudentChartPage";

class StudentCharts extends Component {
  componentDidMount() {
    const user = this.props.auth.user.token;
    this.props.studentsActions.fetchStudents(user);
  }

  displayStudentChartPage(students) {
    console.log("students", students);
    if (!students) {
      return <div>loading...</div>;
    }
    let itemType = this.props.match.params.itemType;
    return <StudentChartPage students={students} itemType={itemType} />;
  }

  render() {
    return this.displayStudentChartPage(this.props.students);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentsActions: bindActionCreators(studentsActions, dispatch)
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
