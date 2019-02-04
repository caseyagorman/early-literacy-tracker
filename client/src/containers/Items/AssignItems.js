import React from "react";
import AssignItemsForm from "../Forms/AssignItemsForm";
import AssignItemsPage from "../../components/Items/AssignItemsPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentUnassignedItemsActions from "../../redux/actions/studentUnassignedItemsActions";
import "../../components/Forms/static/form.css";
class AssignItems extends React.Component {
  componentDidMount() {
    const user = this.props.auth.user.token;
    let itemType = this.props.match.params.itemType;
    this.props.studentUnassignedItemsActions.fetchUnassignedItems(
      user,
      itemType
    );
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.itemType !== this.props.match.params.itemType) {
      let user = this.props.auth.user.token;
      let itemType = this.props.match.params.itemType;
      this.props.studentUnassignedItemsActions.fetchUnassignedItems(
        user,
        itemType
      );
    }
  }

  displayAssignItemsForm(items) {
    const itemType = this.props.match.params.itemType;
    if (
      items.studentItemSets === null ||
      !itemType ||
      !items.studentItemSets[itemType]
    ) {
      return <p />;
    }
    return (
      <div className="container">
        <AssignItemsPage itemType={itemType} />
        {Object.entries(items.studentItemSets[itemType]).map(itemSet => (
          <AssignItemsForm
            listTitle={itemSet[0]}
            itemList={itemSet[1]}
            itemType={itemType}
          />
        ))}
      </div>
    );
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
