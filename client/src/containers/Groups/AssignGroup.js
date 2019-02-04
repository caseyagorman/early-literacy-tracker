import React from "react";
import AssignGroupForm from "../Forms/AssignGroupForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentsActions from "../../redux/actions/studentsActions";
import * as groupActions from "../../redux/actions/groupActions";
import AssignGroupPage from "../../components/Groups/AssignGroupPage";

class AssignGroup extends React.Component {
  componentDidMount() {
    const user = this.props.auth.user.token;
    this.props.studentsActions.fetchStudentNames(user);
    this.props.groupActions.fetchGroups(user);
  }

  displayAssignGroupForm(students, groups) {
    if (students === null || students.students === null || groups === null) {
      return <p />;
    }
    const maxGroupArray = Object.values(groups).map(
      group => group.students.length
    );
    let maxGroupLength = Math.max(...maxGroupArray);
    maxGroupLength = maxGroupLength * 20;

    return (
      <div className="container">
        <AssignGroupPage />
        {Object.values(groups).map(group => (
          <AssignGroupForm
            students={students}
            group={group}
            maxGroupLength={maxGroupLength}
          />
        ))}
      </div>
    );
  }

  render() {
    return this.displayAssignGroupForm(this.props.students, this.props.groups);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentsActions: bindActionCreators(studentsActions, dispatch),
    groupActions: bindActionCreators(groupActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    students: state.students,
    groups: state.groups,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignGroup);
