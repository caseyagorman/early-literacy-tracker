import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "../../redux/actions/itemsActions";
import * as authActions from "../../redux/actions/authActions";
import AllItemsPage from "../../components/Items/AllItemsPage";

class AllItems extends React.Component {
  componentDidMount() {
    let itemType = this.props.match.params.itemType;
    let user = this.props.auth.user.token;
    this.props.itemsActions.fetchItems(user, itemType);
  }

  componentDidUpdate(prevProps) {
    console.log("fffffffffffff");

    if (prevProps.match.params.itemType !== this.props.match.params.itemType) {
      let user = this.props.auth.user.token;
      let itemType = this.props.match.params.itemType;
      this.props.itemsActions.fetchItems(user, itemType);
    }
  }

  displayItems(items) {
    if (!items) {
      return <p />;
    }
    items = Object.values(items);
    return (
      <AllItemsPage items={items} itemType={this.props.match.params.itemType} />
    );
  }

  render() {
    return this.displayItems(this.props.items);
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
