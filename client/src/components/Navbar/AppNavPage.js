import React from "react";
import {
  Navbar,
  NavItem,
  Nav,
  MenuItem,
  NavDropdown,
  Glyphicon
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./static/appNav.css";
const AppNavPage = props => {
  return (
    <Navbar style={{ border: 1 }} collapseOnSelect id="navbar">
      {console.log("ROUTE!", props.route)}
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/students" id="Brand">
            TrackIt
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/students" id="Students">
            <MenuItem id="Students">Students</MenuItem>
          </LinkContainer>

          <LinkContainer id="Words" to="/items/words/">
            <MenuItem id="Words">Words</MenuItem>
          </LinkContainer>

          <LinkContainer to="/items/letters/" id="Letters">
            <MenuItem id="Letters">Letters</MenuItem>
          </LinkContainer>
          <LinkContainer to="/items/sounds/" id="Sounds">
            <MenuItem id="Sounds">Sounds</MenuItem>
          </LinkContainer>
          <LinkContainer to="/manage-groups/" id="Students">
            <MenuItem id="Students"> Groups</MenuItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavItem id="Logout" eventKey={5} href={props.route}>
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
