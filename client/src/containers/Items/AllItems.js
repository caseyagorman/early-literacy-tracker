import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "../../redux/actions/itemsActions";
import * as authActions from "../../redux/actions/authActions";
import AllItemsPage from "../../components/Items/AllItemsPage";

class AllItems extends React.Component {
  getData(type, user) {
    console.log("getting data", type, user);
    if (!type) {
      return <p>loading...</p>;
    }
    if (type === "words") {
      this.props.itemsActions.fetchWords(user);
      let route = "/add-words";
      let text = "Add Words";
      this.displayData(this.props.items, route, text);
    } else if (type === "letters") {
      this.props.itemsActions.fetchLetters(user);
      let route = "/add-letters";
      let text = "Add Letters";
      this.displayData(this.props.items, route, text);
    } else if (type === "sounds") {
      this.props.itemsActions.fetchSounds(user);
      let route = "/add-sounds";
      let text = "Add Sounds";
      this.displayData(this.props.items, route, text);
    }
  }

  displayData(items, route, text) {
    console.log("displaying data", items, route, text);
    if (!items) {
      return <p>loading...</p>;
    }

    return <AllItemsPage items={items} route={route} text={text} />;
  }

  render() {
    // return <div>{this.props.itemType}</div>;
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
