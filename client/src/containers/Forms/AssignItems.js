import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentItemsActions from "../../redux/actions/studentItemsActions";
import AssignItemsForm from "../../components/Forms/AssignItemsForm";

class AssignItems extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  componentDidMount() {
    console.log("assign items container", this.props);
    const id = this.props.student[0].student_id;
    const user = this.props.auth.user.token;
    const itemType = this.props.itemType;
    this.props.studentItems.fetchUnassignedItems(id, user, itemType);
  }

  handleSubmit(event) {
    event.preventDefault();
    let newStudentItems = {
      student: this.props.student[0].student_id,
      items: this.state.value
    };

    let user = this.props.auth.user.token;
    this.props.studentItems.assignStudentItems(newStudentItems, user);
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

  turnIntoArray(obj) {
    if (!obj) {
      return <p>Loading...</p>;
    }
    let itemList = [];
    for (let key in obj) {
      let itemObj = obj[key];
      itemList.push(itemObj.item);
    }
    return itemList;
  }

  getOptions() {
    if (!this.props.studentUnassignedWords) {
      return <div>Loading!</div>;
    }
    let itemList = this.turnIntoArray(this.props.studentUnassignedWords);
    return (
      <AssignItemsForm
        student={this.props.student[0]}
        handleSubmit={this.handleSubmit}
        itemList={itemList}
        itemType={this.props.itemType}
      />
    );
  }

  render() {
    return <div>{this.getOptions()}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentItems: bindActionCreators(studentItemsActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    studentItems: state.studentItems,
    studentUnassignedWords: state.studentUnassignedWords,
    studentUnassignedLetters: state.studentUnassignedLetters,
    studentUnassignedSounds: state.studentUnassignedSounds,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignItems);
