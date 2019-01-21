import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../redux/actions/studentActions";
import StudentItemDoughnutChart from "../Charts/StudentItemDoughnutChart";
import StudentItemLineChart from "../Charts/StudentItemLineChart";

class StudentItemCharts extends Component {
  componentDidMount() {
    let studentId = this.props.match.params.id;
    if (!studentId) {
      return <div>loading...</div>;
    }
    const user = this.props.auth.user.token;
    this.props.studentActions.fetchStudent(studentId, user);
  }

  displayDoughnutChart(student) {
    if (!student) {
      return <div>loading...</div>;
    }
    return (
      <StudentItemDoughnutChart
        student={student}
        itemType={this.props.match.params.itemType}
      />
    );
  }

  displayLineChart(student) {
    if (!student) {
      return <div>loading...</div>;
    }
    return (
      <StudentItemLineChart
        student={student}
        itemType={this.props.match.params.itemType}
      />
    );
  }
  render() {
    return (
      this.displayDoughnutChart(this.props.student),
      this.displayLineChart(this.props.student)
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentActions: bindActionCreators(studentActions, dispatch)
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
)(StudentItemCharts);
