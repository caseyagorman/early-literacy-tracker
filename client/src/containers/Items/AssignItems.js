import React from "react";
import AssignItemsForm from "../Forms/AssignItemsForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentUnassignedItemsActions from "../../redux/actions/studentUnassignedItemsActions";

class AssignItems extends React.Component {
  componentDidMount() {
    const user = this.props.auth.user.token;
    let itemType = this.props.match.params.itemType;
    console.log("user", user, "itemType", itemType);
    this.props.studentUnassignedItemsActions.fetchUnassignedItems(
      user,
      itemType
    );
  }

  displayAssignItemsForm(items) {
    console.log("display assign items page items", items);
    let itemType = this.props.match.params.itemType;
    if (items.studentItemSets === null) {
      return <p>loading...</p>;
    }
    if (items.studentItemSets["words"]) {
      console.log("item list props", items.studentItemSets[itemType]["dolch2"]);
      return (
        <div>
          <AssignItemsForm
            itemList={items.studentItemSets[itemType]["dolchPrePrimer"]}
          />
          <AssignItemsForm
            itemList={items.studentItemSets[itemType]["dolchPrimer"]}
          />
          <AssignItemsForm
            itemList={items.studentItemSets[itemType]["dolch2"]}
          />
        </div>
      );
    }
    if (items.studentItemSets["letters"]) {
      console.log("got letters");
    }
    if (items.studentItemSets["sounds"]) {
      console.log("got wounds");
    }

    return <div />;
    // return <AssignItemsPage itemType={itemType} />
  }

  render() {
    return this.displayAssignItemsForm(this.props.studentUnassignedItems);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentUnassignedItemsActions: bindActionCreators(
      studentUnassignedItemsActions,
      dispatch
    )
  };
}

function mapStateToProps(state) {
  return {
    studentUnassignedItems: state.studentUnassignedItems,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignItems);
