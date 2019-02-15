import React, { Component } from "react";
import { Glyphicon, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./static/buttons.css";

const MarkLearnedButton = props => (
  <form id="mark-learned-button">
    <OverlayTrigger overlay={<Tooltip>click to mark as learned</Tooltip>}>
      <Glyphicon
        glyph="glyphicon glyphicon-remove"
        onClick={props.submit}
        data-toggle="tooltip"
      />
    </OverlayTrigger>
  </form>
);

export default MarkLearnedButton;
