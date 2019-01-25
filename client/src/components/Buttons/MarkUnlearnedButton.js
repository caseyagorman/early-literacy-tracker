import React from "react";
import { Glyphicon } from "react-bootstrap";

const MarkLearnedButton = props => (
  <form id="mark-unlearned-button">
    <Glyphicon
      title="click to mark as unlearned"
      glyph="glyphicon glyphicon-remove"
      onClick={props.submit}
      data-toggle="tooltip"
    />
  </form>
);

export default MarkLearnedButton;
