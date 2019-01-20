import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "../../redux/actions/itemsActions";
// import DeleteItem from "../Forms/DeleteItem";
import ItemDetailPage from "../../components/Items/ItemDetailPage";
class ItemDetail extends Component {
  componentDidMount() {
    const itemType = this.props.match.params.itemType;
    const id = this.props.match.params.id;
    const user = this.props.auth.user.token;
    this.props.itemsActions.fetchItem(id, itemType, user);
  }

  displayItemDetail(item) {
    if (item.item === null) {
      return <div>loading...</div>;
    }
    return (
      <ItemDetailPage
        item={item.item}
        students={item.studentList}
        id={this.props.match.params.id}
        itemType={this.props.match.params.itemType}
      />
    );
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
