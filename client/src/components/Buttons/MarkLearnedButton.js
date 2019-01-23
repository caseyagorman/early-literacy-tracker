import React from "react";
import { Glyphicon } from "react-bootstrap";
import "./static/buttons.css";
const MarkLearnedButton = props => (
  <form id="mark-learned-button">
    <Glyphicon
      glyph="glyphicon glyphicon-plus-sign"
      onClick={props.submit}
      id="ok"
    />
  </form>
);

export default MarkLearnedButton;
