import React, { Component } from "react";
import { connect } from "react-redux";
import * as notesActions from "../../redux/actions/notesActions";
import AddNoteForm from "../../components/Forms/AddStudentForm";

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
    let user = this.props.auth.user.token;
    let newNote = {
      note: this.state.note
    };
    this.props.notesActions.addNote(newNote, user);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <AddNoteForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    notesActions: notesActions,
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNote);
