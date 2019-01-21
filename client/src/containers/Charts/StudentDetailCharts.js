import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../redux/actions/studentActions";
import StudentItemDoughnutChart from "./StudentItemDoughnutChart";
import StudentItemLineChart from "./StudentItemLineChart";

class StudentDetailCharts extends Component {
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
    if (student.student === null) {
      return <div> loading...</div>;
    }
    return (
      <b>
        <StudentItemDoughnutChart student={student} itemType={"words"} />
        <StudentItemDoughnutChart student={student} itemType={"letters"} />
        <StudentItemDoughnutChart student={student} itemType={"sounds"} />
      </b>
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
    return this.displayDoughnutChart(this.props.student);
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
)(StudentDetailCharts);
