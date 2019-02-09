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
            <MenuItem id="Students">View Students</MenuItem>
          </LinkContainer>
          <LinkContainer id="Students" to="/student-charts/words/">
            <MenuItem id="Students">View Student Word Charts</MenuItem>
          </LinkContainer>
          <LinkContainer id="Students" to="/student-charts/letters/">
            <MenuItem id="Students" href="/student-charts/letters/">
              View Student Letter Charts
            </MenuItem>
          </LinkContainer>
          <LinkContainer id="Students" to="/student-charts/sounds/">
            <MenuItem id="Students" href="/student-charts/sounds/">
              View Student Sound Charts
            </MenuItem>
          </LinkContainer>
          <LinkContainer id="Words" to="/items/words/">
            <MenuItem id="Words">View Words</MenuItem>
          </LinkContainer>
          <LinkContainer id="Words" to="/item-charts/words/">
            <MenuItem id="Words">View Word Charts</MenuItem>
          </LinkContainer>
          <LinkContainer id="Words" to="/add-items/words/">
            <MenuItem id="Words">Add Words</MenuItem>
          </LinkContainer>
          <LinkContainer to="/items/letters/" id="Letters">
            <MenuItem id="Letters">View Letters</MenuItem>
          </LinkContainer>
          <LinkContainer id="Letters" to="/item-charts/letters/">
            <MenuItem id="Letters">View Letter Charts</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-items/letters/">
            <MenuItem id="Letters">Add Letters</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-student" id="Students">
            <MenuItem id="Students">Add Students</MenuItem>
          </LinkContainer>

          <LinkContainer to="/items/sounds/" id="Sounds">
            <MenuItem id="Sounds">View Sounds</MenuItem>
          </LinkContainer>
          <LinkContainer to="/item-charts/sounds/" id="Sounds">
            <MenuItem id="Sounds">View Sound Charts</MenuItem>
          </LinkContainer>
          <LinkContainer to="/add-items/sounds/">
            <MenuItem id="Sounds">Add Sounds</MenuItem>
          </LinkContainer>

          <LinkContainer to="/reading-level-charts/" id="Students">
            <MenuItem id="Students">View Reading Level Charts</MenuItem>
          </LinkContainer>

          <LinkContainer to="/create-group/" id="Students">
            <MenuItem id="Students">Create Group</MenuItem>
          </LinkContainer>
          <LinkContainer to="/manage-groups/" id="Students">
            <MenuItem id="Students"> View/Manage Groups</MenuItem>
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
