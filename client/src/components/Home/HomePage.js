import React from "react";
import MainButton from "../Buttons/MainButton";
import image from "./static/Literacy9.png";
import { Link } from "react-router-dom";
import "./static/home.css";
const HomePage = props => (
  <div id="home-page">
    <div className="container">
      <h1 id="display-name">Welcome, {props.username}!</h1>
      <div>
        {/* <MainButton
          id="main-menu-students-button"
          text={"Students"}
          route={`/students`}
        />
        <MainButton
          id="main-menu-words-button"
          text={"Words"}
          route={`/items/words`}
        />
        <MainButton
          id="main-menu-letters-button"
          text={"Letters"}
          route={`/items/letters`}
        />
        <MainButton
          id="main-menu-sounds-button"
          text={"Sounds"}
          route={`/items/sounds`}
        /> */}
        <Link to={`/students`}>
          <img src={image} alt="Logo" />
        </Link>
      </div>
    </div>
  </div>
);
export default HomePage;
