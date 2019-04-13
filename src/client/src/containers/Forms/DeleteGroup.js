import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as groupActions from "../../redux/actions/groupActions";
import DeleteButton from "../../components/Buttons/DeleteButton";

class DeleteGroup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
  }

  getOptions(group) {
    if (group === "") {
      return (
        <DeleteButton submit={this.submit} handleSubmit={this.handleSubmit} />
      );
    }
    if (!group) {
      return <div />;
    }
    return (
      <DeleteButton submit={this.submit} handleSubmit={this.handleSubmit} />
    );
  }

  handleSubmit() {
    const user = this.props.auth.user.token;
    const group = this.props.group;
    this.props.groupActions.deleteGroup(group, user);
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
    return this.getOptions(this.props.group);
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
const DeleteGroupWrapped = withRouter(DeleteGroup);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteGroupWrapped);
