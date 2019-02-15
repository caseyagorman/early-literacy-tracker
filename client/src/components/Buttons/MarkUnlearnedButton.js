import React from "react";
import { Glyphicon, OverlayTrigger, Tooltip } from "react-bootstrap";

const MarkUnlearnedButton = props => (
  <form id="mark-unlearned-button">
    <OverlayTrigger overlay={<Tooltip>click to mark as unlearned</Tooltip>}>
      <Glyphicon
        glyph="glyphicon glyphicon-ok"
        onClick={props.submit}
        data-toggle="tooltip"
      />
    </OverlayTrigger>
  </form>
);

export default MarkUnlearnedButton;
