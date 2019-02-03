import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as groupActions from "../../redux/actions/groupActions";
import AssignGroupFormPage from "../../components/Forms/AssignGroupFormPage";
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
    console.log("state upon submit", this.state);
    let students = this.state.value;
    let group = this.props.group;
    const user = this.props.auth.user.token;
    this.props.groupActions.assignGroup(students, group, user);
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

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  getOptions(studentList) {
    if (!studentList) {
      return <div>Loading!</div>;
    }
    studentList = Object.values(studentList);
    return (
      <AssignGroupFormPage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        studentList={studentList}
        group={this.props.group}
      />
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
