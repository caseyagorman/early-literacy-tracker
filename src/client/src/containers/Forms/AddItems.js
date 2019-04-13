import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "../../redux/actions/itemsActions";
import * as studentActions from "../../redux/actions/studentActions";
import * as authActions from "../../redux/actions/authActions";
import { ToastContainer, ToastStore } from "react-toasts";
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
    return this.displayToast("added!");
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
  displayAddItemsForm(student) {
    if (student.student === null) {
      return <div />;
    }

    return (
      <div style={{ fontFamily: "krub", display: "inline-block" }}>
        <AddItemsForm
          student={student.name}
          itemType={this.props.match.params.itemType}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          type={this.props.itemType}
          value={this.state.newItem}
        />
        <ToastContainer
          position={ToastContainer.POSITION.TOP_RIGHT}
          store={ToastStore}
        />
      </div>
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
