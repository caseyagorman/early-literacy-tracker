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
  }

  getOptions(item) {
    if (!item) {
      return <div>loading...</div>;
    }
    return <DeleteButton submit={this.handleSubmit} />;
  }

  handleSubmit() {
    const user = this.props.auth.user.token;
    const item = this.props.item.item_id;
    this.props.itemsActions.deleteItem(item, user);
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
    return <b>{this.getOptions(this.props.item)}</b>;
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
