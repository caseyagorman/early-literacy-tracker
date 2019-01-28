import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "../../redux/actions/itemsActions";
import * as studentActions from "../../redux/actions/studentActions";
import * as authActions from "../../redux/actions/authActions";
import AddItemsForm from "../../components/Forms/AddItemsForm";
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = { newItem: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    const student = this.props.match.params.id;
    const user = this.props.auth.user.token;
    this.props.studentActions.fetchStudent(student, user);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    const student = this.props.match.params.id;
    const user = this.props.auth.user.token;
    const item = this.state.newItem;
    const itemType = this.props.match.params.itemType;
    this.props.itemsActions.addCustomItem(item, user, student, itemType);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  displayAddItemsForm(student) {
    if (student.student === null) {
      return <div>loading...</div>;
    }

    return (
      <AddItemsForm
        student={student.student.name}
        itemType={this.props.match.params.itemType}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        type={this.props.itemType}
        value={this.state.newItem}
      />
    );
  }

  render() {
    return this.displayAddItemsForm(this.props.student);
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    student: state.student,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    itemsActions: bindActionCreators(itemsActions, dispatch),
    studentActions: bindActionCreators(studentActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem);
