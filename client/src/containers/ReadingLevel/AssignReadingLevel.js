import React from "react";
import AssignReadingLevelForm from "../Forms/AssignItemsForm";
import AssignReadingLevelPage from "../../components/Items/AssignItemsPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentUnassignedItemsActions from "../../redux/actions/studentUnassignedItemsActions";
import "../../components/Forms/static/form.css";
class AssignReadingLevel extends React.Component {
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

  displayAssignReadingLevelForm(items) {
    const itemType = this.props.match.params.itemType;
    if (
      items.studentItemSets === null ||
      !itemType ||
      !items.studentItemSets[itemType]
    ) {
      return <p>loading...</p>;
    }
    return (
      <div className="container">
        <AssignReadingLevelForm itemType={itemType} />
        {Object.entries(items.studentItemSets[itemType]).map(itemSet => (
          <AssignReadingLevelForm
            listTitle={itemSet[0]}
            itemList={itemSet[1]}
            itemType={itemType}
          />
        ))}
      </div>
    );
  }

  render() {
    return this.displayAssignReadingLevelForm(
      this.props.studentUnassignedItems
    );
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
)(AssignReadingLevel);
