import React, { Component } from "react";
import { connect } from "react-redux";
import * as groupActions from "../../redux/actions/groupActions";
import AddNoteFormPage from "../../components/Forms/AddNoteFormPage";
import { bindActionCreators } from "redux";
class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = { note: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    let group = this.props.group.name;
    let user = this.props.auth.user.token;
    let note = this.state.note;
    console.log("note", note, group);
    this.props.groupActions.addNote(note, group, user);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <AddNoteFormPage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        value={this.state.value}
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
    groupActions: bindActionCreators(groupActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNote);
