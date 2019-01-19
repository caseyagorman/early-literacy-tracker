import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "../../redux/actions/itemsActions";
// import DeleteItem from "../Forms/DeleteItem";
import ItemDetailPage from "../../components/Items/ItemDetailPage";
class ItemDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    const user = this.props.auth.user.token;
    console.log("id", id, "user", user);
    this.props.itemsActions.fetchItem(id, user);
  }

  displayItemDetail(item) {
    console.log("ITEM", item);
    if (!item) {
      return <div>loading...</div>;
    }

    return <ItemDetailPage item={item} />;
  }

  render() {
    return this.displayItemDetail(this.props.item);
  }
}
function mapDispatchToProps(dispatch) {
  return {
    itemsActions: bindActionCreators(itemsActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    item: state.item,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
