import React, { Component } from "react";
import { Glyphicon, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./static/buttons.css";

const MarkLearnedButton = props => (
  <form id="mark-learned-button">
    <OverlayTrigger overlay={<Tooltip>click to mark as learned</Tooltip>}>
      <Glyphicon
        title="click to mark as learned"
        glyph="glyphicon glyphicon-ok"
        onClick={props.submit}
        id="ok"
      />
    </OverlayTrigger>
  </form>
);

export default MarkLearnedButton;
