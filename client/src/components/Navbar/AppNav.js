import React from "react";
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./static/appNav.css";
const AppNav = () => {
  return (
    <Navbar collapseOnSelect id="navbar">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/" id="Brand">
            Trackt
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem id="Students" eventKey={1}>
            <NavDropdown eventKey={3} title="Students" id="basic-nav-dropdown">
              <LinkContainer to="/students">
                <MenuItem eventKey={3.1}>View Students</MenuItem>
              </LinkContainer>
              <LinkContainer to="/add-student">
                <MenuItem eventKey={3.1}>Add Students</MenuItem>
              </LinkContainer>
              <LinkContainer to="/students">
                <MenuItem eventKey={3.1}>Test Students</MenuItem>
              </LinkContainer>
              <LinkContainer to="/student-charts/words/">
                <MenuItem eventKey={3.2}>View Student Word Charts</MenuItem>
              </LinkContainer>
              <LinkContainer to="/student-charts/letters/">
                <MenuItem eventKey={3.3} href="/student-charts/letters/">
                  View Student Letter Charts
                </MenuItem>
              </LinkContainer>
              <LinkContainer to="/student-charts/sounds/">
                <MenuItem eventKey={3.4} href="/student-charts/sounds/">
                  View Student Sound Charts
                </MenuItem>
              </LinkContainer>
            </NavDropdown>
          </NavItem>
          <NavItem id="Words" eventKey={2}>
            <NavDropdown eventKey={3} title="Words" id="basic-nav-dropdown">
              <LinkContainer to="/items/words/">
                <MenuItem eventKey={3.1} onclick={() => alert("bingbong")}>
                  View Words
                </MenuItem>
              </LinkContainer>
              <LinkContainer to="/item-charts/words/">
                <MenuItem eventKey={3.2}>View Word Charts</MenuItem>
              </LinkContainer>
              <LinkContainer to="/add-items/words/">
                <MenuItem eventKey={3.2}>Add Words</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </NavItem>
          <NavItem id="Letters" eventKey={2}>
            <NavDropdown eventKey={3} title="Letters" id="basic-nav-dropdown">
              <LinkContainer to="/items/letters/">
                <MenuItem eventKey={3.1}>View Letters</MenuItem>
              </LinkContainer>
              <LinkContainer to="/item-charts/letters/">
                <MenuItem eventKey={3.2}>View Letter Charts</MenuItem>
              </LinkContainer>
              <LinkContainer to="/add-items/letters/">
                <MenuItem eventKey={3.2}>Add Letters</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </NavItem>
          <NavItem id="Sounds" eventKey={2}>
            <NavDropdown eventKey={3} title="Sounds" id="basic-nav-dropdown">
              <LinkContainer to="/items/sounds/">
                <MenuItem eventKey={3.1}>View Sounds</MenuItem>
              </LinkContainer>
              <LinkContainer to="/item-charts/sounds/">
                <MenuItem eventKey={3.2}>View Sound Charts</MenuItem>
              </LinkContainer>
              <LinkContainer to="/add-items/sounds/">
                <MenuItem eventKey={3.2}>Add Sounds</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem id="Logout" eventKey={5} href="/logout/">
            Logout
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNav;
