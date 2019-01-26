import React from "react";
import { Link } from "react-router-dom";
const AllStudentsMenu = props => (
  <div className="all-students-buttons">
    <Link to="/items/words" className="link">
      <button id="word-data"> Words </button>
    </Link>
    <Link to="/items/letters" className="link">
      <button id="letter-data"> Letters </button>
    </Link>
    <Link to="/items/sounds" className="link">
      <button id="sound-data"> Sounds </button>
    </Link>
    <br />
    <Link to="/student-charts/words" className="link">
      <button id="word-data"> View word data </button>
    </Link>

    <Link to="/student-charts/letters" className="link">
      <button id="letter-data">View letter data </button>
    </Link>

    <Link to="/student-charts/sounds" className="link">
      <button id="sound-data">View sound data</button>
    </Link>
    <br />

    <Link to="/add-items/words" className="link">
      <button id="word-data">Add new words</button>
    </Link>

    <Link to="/add-items/letters" className="link">
      <button id="letter-data">Add new letters</button>
    </Link>

    <Link to="/add-items/sounds" className="link">
      <button id="sound-data">Add new sounds</button>
    </Link>
  </div>
);

export default AllStudentsMenu;
