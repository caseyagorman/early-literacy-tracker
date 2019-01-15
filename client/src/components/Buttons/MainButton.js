import React from "react";
import { Link } from "react-router-dom";

const MainButton = props => {
  return (
    <Link to={props.route}>
      <button onClick={props.onClick}>{props.text}</button>
    </Link>
  );
};

export default MainButton;
