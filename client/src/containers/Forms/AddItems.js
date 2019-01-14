import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "../../redux/actions/itemsActions";
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
    if (sessionStorage.token) {
      this.props.authActions.checkUser(sessionStorage);
    } else {
      alert("Please log in");
      this.props.history.push("/login");
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    const user = this.props.token;
    const item = this.state.newItem;
    const itemType = this.props.itemType;
    this.props.itemActions.addWord(user, item, itemType);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <AddItemsForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        type={this.props.itemType}
        value={this.state.newItem}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    itemsActions: bindActionCreators(itemsActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem);
