import React, { Component } from "react";
import { connect } from "react-redux";
import * as groupActions from "../../redux/actions/groupActions";
import AddGroupForm from "../../components/Forms/AddGroupForm";

class AddGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { group: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    let user = this.props.auth.user.token;
    let newGroup = this.state.group;
    this.props.groupActions.addGroup(newGroup, user);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <AddGroupForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        group={this.state.group}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    groupActions: groupActions,
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGroup);
