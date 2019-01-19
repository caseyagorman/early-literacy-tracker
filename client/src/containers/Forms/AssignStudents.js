import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemUnassignedStudentsActions from "../../redux/actions/itemUnassignedStudentsActions";
import AssignStudentsForm from "../../components/Forms/AssignItemsForm";

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
    this.props.itemUnassignedStudents.fetchUnassignedStudents(id, user);
  }

  handleSubmit(event) {
    event.preventDefault();
    let newStudentItems = {
      student: this.props.student.student.student_id,
      items: this.state.value,
      itemType: this.props.itemType
    };
    let user = this.props.auth.user.token;
    this.props.itemUnassignedStudents.assignStudentItems(newStudentItems, user);
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

  getOptions(itemStudents) {
    if (!itemStudents) {
      return <div>Loading!</div>;
    }
    let itemList = [];
    for (let key in itemStudents) {
      let itemObj = itemStudents[key];
      itemList.push(itemObj.item);
    }
    return <div>you are okay</div>;
    // return (
    //   <AssignStudentsForm
    //     student={this.props.student.student}
    //     handleSubmit={this.handleSubmit}
    //     handleChange={this.handleChange}
    //     itemList={itemList}
    //     itemType={this.props.itemType}
    //   />
    // );
  }

  render() {
    return <div>{this.getOptions(this.props.unassignedStudents)}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    itemUnassignedStudents: bindActionCreators(
      itemUnassignedStudentsActions,
      dispatch
    )
  };
}

function mapStateToProps(state) {
  return {
    unassignedStudents: state.itemUnassignedStudents,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignStudents);
