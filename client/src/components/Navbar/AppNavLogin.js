import React from "react";
import { Navbar, NavItem, Nav, Glyphicon } from "react-bootstrap";

import "./static/appNav.css";
const AppNavPage = props => {
  return (
    <Navbar style={{ border: 1 }} collapseOnSelect id="navbar">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/students" id="Brand">
            TrackIt
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight style={{ marginRight: -20 }}>
          <NavItem id="Logout" href={props.route}>
            {props.navText} <span />
            <Glyphicon
              glyph="glyphicon glyphicon-off"
              onClick={props.submit}
              id="trash-can"
            />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavPage;
