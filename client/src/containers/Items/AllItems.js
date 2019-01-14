import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "../../redux/actions/itemsActions";
import * as authActions from "../../redux/actions/authActions";
import AllItemsPage from "../../components/Items/AllItemsPage";

class AllItems extends React.Component {
  componentDidMount() {
    let user = this.props.auth.user.token;
    if (this.props.itemType === "words") {
      this.props.itemsActions.fetchWords(user);
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
    if (items.itemType === "words") {
      let route = "/add-words";
      let text = "Add Words";
      return <AllItemsPage items={items} route={route} text={text} />;
    } else if (items.itemType === "letters") {
      let route = "/add-letters";
      let text = "Add Letters";
      return <AllItemsPage items={items} route={route} text={text} />;
    } else if (items.itemType === "sounds") {
      let route = "/add-sounds";
      let text = "Add Sounds";
      return <AllItemsPage items={items} route={route} text={text} />;
    }
  }

  render() {
    return <div>{this.displayItems(this.props.items)}</div>;
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
