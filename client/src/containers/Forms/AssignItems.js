import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentUnassignedItemsActions from "../../redux/actions/studentUnassignedItemsActions";
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
    const id = this.props.student[0].student_id;
    const user = this.props.auth.user.token;
    const itemType = this.props.itemType;
    this.props.studentUnassignedItems.fetchUnassignedItems(id, user, itemType);
  }

  handleSubmit(event) {
    event.preventDefault();
    let newStudentItems = {
      student: this.props.student[0].student_id,
      items: this.state.value,
      itemType: this.props.itemType
    };
    let user = this.props.auth.user.token;
    this.props.studentUnassignedItems.assignStudentItems(newStudentItems, user);
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

  getOptions(studentItems) {
    let itemType = this.props.itemType;
    if (!studentItems) {
      return <div>Loading!</div>;
    }
    studentItems = studentItems.studentItemSets;
    let items = studentItems[itemType];
    let itemList = [];
    for (let key in items) {
      let itemObj = items[key];
      itemList.push(itemObj.item);
    }

    return (
      <AssignItemsForm
        student={this.props.student[0]}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        itemList={itemList}
        itemType={this.props.itemType}
      />
    );
  }

  render() {
    return <div>{this.getOptions(this.props.unassignedItems)}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentUnassignedItems: bindActionCreators(
      studentUnassignedItemsActions,
      dispatch
    )
  };
}

function mapStateToProps(state) {
  return {
    unassignedItems: state.studentUnassignedItems,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignItems);
