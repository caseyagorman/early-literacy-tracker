import React from "react";
import { Link } from "react-router-dom";

const MainButton = props => {
  return (
    <Link to={props.route}>
      <button>View {props.name}</button>
    </Link>
  );
};

export default MainButton;
