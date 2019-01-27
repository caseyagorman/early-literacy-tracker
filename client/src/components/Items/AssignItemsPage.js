import React from "react";
import AssignItemsForm from "../../containers/Forms/AssignItemsForm";
const AssignItemsPage = props => (
  <div>
    {console.log("assign items page", props)}
    <AssignItemsForm itemType={props.itemType} />
  </div>
);

export default AssignItemsPage;
