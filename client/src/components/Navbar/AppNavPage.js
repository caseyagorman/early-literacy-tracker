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
    <Navbar collapseOnSelect expand="md">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/students">TrackIt</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}>
            <NavDropdown eventKey={3} title="Students">
              <LinkContainer to="/students">
                <MenuItem>View Students</MenuItem>
              </LinkContainer>
              <LinkContainer to="/student-charts/words/">
                <MenuItem>View Student Word Charts</MenuItem>
              </LinkContainer>
              <LinkContainer to="/student-charts/letters/">
                <MenuItem href="/student-charts/letters/">
                  View Student Letter Charts
                </MenuItem>
              </LinkContainer>
              <LinkContainer to="/student-charts/sounds/">
                <MenuItem href="/student-charts/sounds/">
                  View Student Sound Charts
                </MenuItem>
              </LinkContainer>
              <LinkContainer to="/add-student">
                <MenuItem>Add Students</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </NavItem>
          <NavItem eventKey={2}>
            <NavDropdown title="Words">
              <LinkContainer to="/items/words/">
                <MenuItem>View Words</MenuItem>
              </LinkContainer>
              <LinkContainer to="/item-charts/words/">
                <MenuItem>View Word Charts</MenuItem>
              </LinkContainer>
              <LinkContainer to="/add-items/words/">
                <MenuItem>Add Words</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </NavItem>
          <NavItem eventKey={2}>
            <NavDropdown eventKey={3} title="Letters">
              <LinkContainer to="/items/letters/">
                <MenuItem>View Letters</MenuItem>
              </LinkContainer>
              <LinkContainer to="/item-charts/letters/">
                <MenuItem>View Letter Charts</MenuItem>
              </LinkContainer>
              <LinkContainer to="/add-items/letters/">
                <MenuItem>Add Letters</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </NavItem>
          <NavItem>
            <NavDropdown title="Sounds">
              <LinkContainer to="/items/sounds/">
                <MenuItem>View Sounds</MenuItem>
              </LinkContainer>
              <LinkContainer to="/item-charts/sounds/">
                <MenuItem>View Sound Charts</MenuItem>
              </LinkContainer>
              <LinkContainer to="/add-items/sounds/">
                <MenuItem>Add Sounds</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </NavItem>
          <NavItem>
            <NavDropdown title="Reading">
              <LinkContainer to="/reading-level-charts/">
                <MenuItem>View Reading Level Charts</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </NavItem>
          <NavItem>
            <NavDropdown title="Groups">
              <LinkContainer to="/create-group/">
                <MenuItem>Create Group</MenuItem>
              </LinkContainer>
              <LinkContainer to="/manage-groups/">
                <MenuItem> View/Manage Groups</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </NavItem>
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
