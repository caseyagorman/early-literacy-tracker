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
    this.getOptions = this.getOptions.bind(this);
  }

  componentDidMount() {
    console.log("assign students", this.props);
    const id = this.props.id;
    const user = this.props.auth.user.token;
    this.props.itemUnassignedStudentsActions.fetchUnassignedStudents(id, user);
  }

  handleSubmit(event) {
    event.preventDefault();
    let newStudentItems = {
      student: this.props.student.student.student_id,
      items: this.state.value,
      itemType: this.props.itemType
    };
    let user = this.props.auth.user.token;
    this.props.itemUnassignedStudentsActions.assignStudentItems(
      newStudentItems,
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

  getOptions(itemUnassignedStudents) {
    console.log("AAAAAAAHHHHHH", itemUnassignedStudents);
    if (!itemUnassignedStudents) {
      return <div>Loading!</div>;
    }
    let studentList = [];
    for (let key in itemUnassignedStudents) {
      let studentObj = itemUnassignedStudents[key];
      console.log("studentObj", studentObj);
      studentList.push(studentObj.student);
    }
    console.log("studentList", studentList);
    // return (
    //   <div>
    //     {console.log("assign students render", this.props)}
    //     <div>you are okay</div>
    //   </div>
    // );
    return (
      <AssignStudentsForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        studentList={studentList}
      />
    );
  }

  render() {
    return <div>{this.getOptions(this.props.itemUnassignedStudents)}</div>;
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
