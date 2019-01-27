import React from "react";
import { Glyphicon } from "react-bootstrap";

const DeleteButton = props => (
  <form id="delete-button">
    {console.log("delete props", props)}
    <Glyphicon
      glyph="glyphicon glyphicon-trash"
      onClick={props.submit}
      id="trash-can"
    />
  </form>
);

export default DeleteButton;
