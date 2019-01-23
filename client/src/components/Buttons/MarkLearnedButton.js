import React from "react";
import { Glyphicon } from "react-bootstrap";

const MarkLearnedButton = props => (
  <form>
    <Glyphicon
      glyph="glyphicon glyphicon-plus-sign"
      onClick={props.submit}
      id="ok"
    />
  </form>
);

export default MarkLearnedButton;
