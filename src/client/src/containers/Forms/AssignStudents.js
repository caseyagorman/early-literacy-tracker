import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemUnassignedStudentsActions from "../../redux/actions/itemUnassignedStudentsActions";
import AssignStudentsForm from "../../components/Forms/AssignStudentsForm";

class AssignStudents extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    const id = this.props.id;
    const user = this.props.auth.user.token;
    this.props.itemUnassignedStudentsActions.fetchUnassignedStudents(id, user);
  }

  getIds(students) {
    let allStudents = this.getList(this.props.itemUnassignedStudents);
    let ids = [];
    for (let i = 0; i < allStudents.length; i++) {
      for (let j = 0; j < students.length; j++) {
        if (allStudents[i].student === students[j]) {
          ids.push(allStudents[i].student_id);
        }
      }
    }
    return ids;
  }

  handleSubmit(event) {
    event.preventDefault();
    let students = this.getIds(this.state.value);
    let id = this.props.id;
    let itemType = this.props.itemType;
    let user = this.props.auth.user.token;
    this.props.itemUnassignedStudentsActions.assignItemStudents(
      id,
      students,
      itemType,
      user
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

  getList(itemUnassignedStudents) {
    if (!itemUnassignedStudents) {
      return <div />;
    }
    let studentList = [];
    for (let key in itemUnassignedStudents) {
      let studentObj = itemUnassignedStudents[key];
      for (let student in studentObj) {
        studentList.push(studentObj[student]);
      }
    }
    return studentList;
  }

  displayForm(unassignedStudents) {
    let studentList = this.getList(unassignedStudents);

    return (
      <AssignStudentsForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        studentList={studentList}
        item={this.props.item}
      />
    );
  }

  render() {
    return this.displayForm(this.props.itemUnassignedStudents);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    itemUnassignedStudentsActions: bindActionCreators(
      itemUnassignedStudentsActions,
      dispatch
    )
  };
}

function mapStateToProps(state) {
  return {
    itemUnassignedStudents: state.itemUnassignedStudents,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignStudents);
