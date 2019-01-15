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

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    const user = this.props.auth.user.token;
    const item = this.state.newItem;
    const itemType = this.props.itemType;
    console.log("handleSubmit", item, itemType, user);
    if (itemType === "words") {
      this.props.itemsActions.addWord(item, user, itemType);
    } else if (itemType === "letters") {
      this.props.itemsActions.addLetter(item, user, itemType);
    }
    if (itemType === "sounds") {
      this.props.itemsActions.addSound(item, user, itemType);
    }
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
