import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "../../redux/actions/itemsActions";
import * as authActions from "../../redux/actions/authActions";
import AllItemsPage from "../../components/Items/AllItemsPage";

class AllItems extends React.Component {
  getData(type, user) {
    console.log(type, user);
    if (!type) {
      return <p>loading...</p>;
    }
    this.props.itemsActions.fetchItems(user, type);
    this.displayData(this.props.items);
  }

  displayData(data) {
    if (!data) {
      return <p>loading...</p>;
    }
    return <AllItemsPage data={this.props.items} />;
  }

  render() {
    return this.getData(this.props.itemType, this.props.auth.user.token);
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
)(AllItems);
