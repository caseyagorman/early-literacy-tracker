import React from "react";
import AssignItemsForm from "../../containers/Forms/AssignItemsForm";
const AssignItemsPage = props => (
  <div>
    {console.log("assign items page", props)}
    <AssignItemsForm filename={props.filename} itemType={props.itemType} />
  </div>
);

export default AssignItemsPage;
