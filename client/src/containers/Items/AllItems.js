import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "../../redux/actions/itemsActions";
import * as authActions from "../../redux/actions/authActions";
import AllItemsPage from "../../components/Items/AllItemsPage";

class AllItems extends React.Component {
  componentDidMount() {
    console.log("this.props all items", this.props);
    this.props.itemsActions.setItemType(this.props.itemType);
    let user = this.props.auth.user.token;
    if (this.props.itemType === "words") {
      this.props.itemsActions.fetchWords(user, this.props.itemType);
    } else if (this.props.itemType === "letters") {
      this.props.itemsActions.fetchLetters(user);
    } else if (this.props.itemType === "sounds") {
      this.props.itemsActions.fetchSounds(user);
    }
  }
  displayItems(items) {
    if (!items) {
      return <p>loading...</p>;
    }
    console.log("item type", items);
    let route = `/add-${this.props.itemType}`;
    let text = `Add ${this.props.itemType}`;
    return (
      <AllItemsPage
        items={items}
        itemType={this.props.itemType}
        route={route}
        text={text}
      />
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
