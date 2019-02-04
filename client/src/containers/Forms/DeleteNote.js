import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as groupActions from "../../redux/actions/groupActions";
import DeleteButton from "../../components/Buttons/DeleteButton";

class DeleteNote extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
  }

  getOptions(note) {
    if (note === "") {
      return (
        <DeleteButton submit={this.submit} handleSubmit={this.handleSubmit} />
      );
    }
    if (!note) {
      return <div />;
    }
    return (
      <DeleteButton submit={this.submit} handleSubmit={this.handleSubmit} />
    );
  }

  handleSubmit() {
    const user = this.props.auth.user.token;
    const group = this.props.group;
    console.log("group", group);
    let note = this.props.note;
    note = note.note;
    this.props.groupActions.deleteNote(note, user, group);
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
    return this.getOptions(this.props.note);
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    groupActions: bindActionCreators(groupActions, dispatch)
  };
}
const DeleteNoteWrapped = withRouter(DeleteNote);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteNoteWrapped);
