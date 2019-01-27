import React from "react";
import AssignItemsPage from "../../components/Items/AssignItemsPage";

class AssignItems extends React.Component {
  displayAssignItemsPage(itemType) {
    if (!itemType) {
      return <p>loading...</p>;
    }
    return (
      <div>
        <AssignItemsPage itemType={itemType} />
      </div>
    );
  }

  render() {
    let itemType = this.props.match.params.itemType;
    return this.displayAssignItemsPage(itemType);
  }
}
export default AssignItems;
