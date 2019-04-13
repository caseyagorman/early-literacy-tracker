import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as groupActions from "../../redux/actions/groupActions";
import AssignGroupFormPage from "../../components/Forms/AssignGroupFormPage";
import { ToastContainer, ToastStore } from "react-toasts";
import "../../components/Forms/static/form.css";

class AssignGroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { groupName: "", value: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let students = this.state.value;
    let group = this.props.group.name;
    const user = this.props.auth.user.token;
    this.props.groupActions.assignGroup(students, group, user);
    return this.displayToast("added!");
  }

  displayToast(message) {
    return (
      <div>
        {ToastStore.success(message)}
        <ToastContainer
          position={ToastContainer.POSITION.TOP_RIGHT}
          store={ToastStore}
        />
      </div>
    );
  }

  handleChange(e) {
    const options = e.target.options;
    let value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ value: value });
  }

  getOptions(studentList) {
    if (!studentList) {
      return <div />;
    }

    return (
      <div style={{ fontFamily: "krub", display: "inline-block" }}>
        <AssignGroupFormPage
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          studentList={studentList}
          group={this.props.group}
          maxGroupLength={this.props.maxGroupLength}
        />
        <ToastContainer
          position={ToastContainer.POSITION.TOP_RIGHT}
          store={ToastStore}
        />
      </div>
    );
  }

  render() {
    return this.getOptions(this.props.students);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    groupActions: bindActionCreators(groupActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignGroupForm);
