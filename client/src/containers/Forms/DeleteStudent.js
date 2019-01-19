import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../redux/actions/studentActions";
import DeleteButton from "../../components/Buttons/DeleteButton";

class DeleteStudent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getOptions(student) {
    if (!student) {
      return <div>loading...</div>;
    }
    return <DeleteButton submit={this.handleSubmit} />;
  }

  handleSubmit() {
    const user = this.props.auth.user.token;
    const student = this.props.student.student_id;
    this.props.studentActions.deleteStudent(student, user);
  }

  submit = event => {
    event.preventDefault();
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: event => this.handleSubmit()
        },
        {
          label: "No",
          onClick: () => console.log("no")
        }
      ]
    });
  };

  render() {
    return this.getOptions(this.props.student);
  }
}

function mapStateToProps(state) {
  return {
    // student: state.student,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    studentActions: bindActionCreators(studentActions, dispatch)
  };
}
const DeleteStudentWrapped = withRouter(DeleteStudent);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteStudentWrapped);
