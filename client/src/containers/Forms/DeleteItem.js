import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemActions from "../../redux/actions/itemsActions";
import DeleteButton from "../../components/Buttons/DeleteButton";

class DeleteItem extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
  }

  getOptions(item) {
    console.log("delete item", item);
    if (!item) {
      return <div>loading...</div>;
    }
    return (
      <DeleteButton submit={this.submit} handleSubmit={this.handleSubmit} />
    );
  }

  handleSubmit() {
    const user = this.props.auth.user.token;
    const item = this.props.item;
    const itemType = this.props.itemType;
    this.props.itemsActions.deleteItem(item, itemType, user);
  }
  submit = event => {
    event.preventDefault();
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: event => this.handleSubmit()
        },
        {
          label: "No",
          onClick: () => console.log("no")
        }
      ]
    });
  };

  render() {
    return this.getOptions(this.props.item);
  }
}

function mapStateToProps(state) {
  return {
    item: state.item,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    itemsActions: bindActionCreators(itemActions, dispatch)
  };
}
const DeleteItemWrapped = withRouter(DeleteItem);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteItemWrapped);
