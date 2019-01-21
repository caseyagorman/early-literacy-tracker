import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "../../redux/actions/itemsActions";
import ItemBarChart from "./ItemBarChart";

class ItemCharts extends Component {
  componentDidMount() {
    let itemType = this.props.match.params.itemType;
    const user = this.props.auth.user.token;
    this.props.itemsActions.fetchItems(user, itemType);
  }

  displayItemBarChart(items) {
    console.log("props", this.props.items);
    console.log("items", items);
    if (!items) {
      return <div>loading...</div>;
    }
    if (items.items === null) {
      return <div>sploading...</div>;
    }
    return (
      <ItemBarChart items={items} itemType={this.props.match.params.itemType} />
    );
  }
  render() {
    return <div />;
    // return this.displayItemBarChart(this.props.items);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    itemsActions: bindActionCreators(itemsActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    items: state.items,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCharts);
