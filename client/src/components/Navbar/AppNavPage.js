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
    <Navbar collapseOnSelect id="navbar">
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
          <LinkContainer id="Students" to="/student-charts/words/">
            <MenuItem id="Students">Student Word Charts</MenuItem>
          </LinkContainer>
          <LinkContainer id="Students" to="/student-charts/letters/">
            <MenuItem id="Students" href="/student-charts/letters/">
              Student Letter Charts
            </MenuItem>
          </LinkContainer>
          <LinkContainer id="Students" to="/student-charts/sounds/">
            <MenuItem id="Students" href="/student-charts/sounds/">
              Student Sound Charts
            </MenuItem>
          </LinkContainer>
          <LinkContainer to="/reading-level-charts/" id="Students">
            <MenuItem id="Students">Reading Level Charts</MenuItem>
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
            <MenuItem id="Students"> Manage Groups</MenuItem>
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
