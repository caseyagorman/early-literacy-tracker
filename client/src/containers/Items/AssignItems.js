import React from "react";
import AssignItemsPage from "../../components/Items/AssignItemsPage";

class AssignItems extends React.Component {
  displayAssignItemsPage(itemType) {
    console.log("display assign items page", itemType);
    if (!itemType) {
      return <p>loading...</p>;
    }
    if (itemType === "words") {
      return (
        <div>
          <AssignItemsPage
            filename={"./dolch_pre_primer.txt"}
            itemType={itemType}
          />
          <AssignItemsPage
            filename={"./dolch_primer.txt"}
            itemType={itemType}
          />
          <AssignItemsPage filename={"./dolch_2.txt"} itemType={itemType} />
        </div>
      );
    } else if (itemType === "letters") {
      return (
        <div>
          <AssignItemsPage filename={"./letters.txt"} itemType={itemType} />
        </div>
      );
    } else if (itemType === "sounds") {
      return (
        <div>
          <AssignItemsPage filename={"./sounds.txt"} itemType={itemType} />
        </div>
      );
    }
  }

  render() {
    let itemType = this.props.match.params.itemType;
    return this.displayAssignItemsPage(itemType);
  }
}
export default AssignItems;
