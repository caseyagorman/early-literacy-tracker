import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentItemActions from "../../redux/actions/studentItemsActions";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { withRouter } from "react-router";
import MarkLearnedButton from "../../components/Buttons/MarkLearnedButton";

class StudentItemLearned extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
  }

  getOptions(student) {
    if (!student) {
      return <div />;
    }
    return (
      <MarkLearnedButton
        handleSubmit={this.handleSubmit}
        submit={this.submit}
      />
    );
  }

  handleSubmit() {
    const user = this.props.auth.user.token;
    const student = this.props.student;
    const item = this.props.item;
    this.props.studentItemActions.markStudentItemLearned(student, item, user);
  }

  submit = event => {
    event.preventDefault();
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this mark this learned?.",
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
    return this.getOptions(this.props.student, this.props.item);
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    studentItemActions: bindActionCreators(studentItemActions, dispatch)
  };
}
const StudentItemLearnedWrapped = withRouter(StudentItemLearned);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentItemLearnedWrapped);
