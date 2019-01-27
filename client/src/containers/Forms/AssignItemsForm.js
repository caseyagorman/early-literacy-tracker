import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "../../redux/actions/itemsActions";
import AssignItemsFormPage from "../../components/Forms/AssignItemsFormPage";
import "../../components/Forms/static/form.css";
class AssignItemsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let itemType = this.props.itemType;
    let items = this.state.value;
    const user = this.props.auth.user.token;
    this.props.itemsActions.addItem(items, user, itemType);
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

  getOptions(itemList) {
    if (!itemList) {
      return <div>Loading!</div>;
    }

    return (
      <AssignItemsFormPage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        itemList={itemList}
        listTitle={this.props.listTitle}
        itemType={this.props.itemType}
      />
    );
  }

  render() {
    return this.getOptions(this.props.itemList);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    itemsActions: bindActionCreators(itemsActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignItemsForm);
