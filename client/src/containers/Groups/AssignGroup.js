import React from "react";
import AssignGroupForm from "../Forms/AssignGroupForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentsActions from "../../redux/actions/studentsActions";
class AssignGroup extends React.Component {
  componentDidMount() {
    const user = this.props.auth.user.token;
    this.props.studentsActions.fetchStudentNames(user);
  }

  displayAssignGroupForm(students) {
    if (students === null || students.students === null) {
      return <p>loading...</p>;
    }
    return <AssignGroupForm students={students} />;
  }

  render() {
    return this.displayAssignGroupForm(this.props.students);
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
)(AssignGroup);
