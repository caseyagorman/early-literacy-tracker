import React from "react";
import { Navbar, NavItem, Nav, Glyphicon } from "react-bootstrap";
import { Link } from "react-router-bootstrap";
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
          <NavItem>
            <Link to="/student-charts/words/">Student Word Charts</Link>
          </NavItem>
          <NavItem>
            <Link to="/student-charts/letters/">Student Letter Charts</Link>
          </NavItem>
          <NavItem>
            <Link to="/student-charts/sounds/">Student Sound Charts</Link>
          </NavItem>
          <NavItem>
            <Link to="/reading-level-charts/">Reading Charts</Link>
          </NavItem>
          <NavItem>
            <Link to="/items/words/">Words</Link>
          </NavItem>
          <NavItem>
            <Link to="/items/letters/">Letters</Link>
          </NavItem>
          <NavItem>
            <Link to="/items/sounds/">Sounds</Link>
          </NavItem>
          <NavItem>
            <Link to="/manage-groups/">Groups</Link>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem href={props.route}>
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
