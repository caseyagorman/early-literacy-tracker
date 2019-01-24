import React from "react";
import { Link } from "react-router-dom";
import "./static/buttons.css";
const MainButton = props => {
  return (
    <Link to={props.route}>
      <button id={props.id} onClick={props.onClick}>
        {props.text}
      </button>
    </Link>
  );
};

export default MainButton;
