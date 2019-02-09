import React from "react";
import { Navbar, NavItem, Nav, Glyphicon } from "react-bootstrap";
// import { Nav.Link } from "react-router-bootstrap";
import "./static/appNav.css";

const AppNavPage = props => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/students">TrackIt</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="/student-charts/words/">Student Word Charts</Nav.Link>
          <Nav.Link href="/student-charts/letters/">
            Student Letter Charts
          </Nav.Link>
          <Nav.Link href="/student-charts/sounds/">
            Student Sound Charts
          </Nav.Link>
          <Nav.Link href="/reading-level-charts/">Reading Charts</Nav.Link>
          <Nav.Link href="/items/words/">Words</Nav.Link>
          <Nav.Link href="/items/letters/">Letters</Nav.Link>
          <Nav.Link href="/items/sounds/">Sounds</Nav.Link>
          <Nav.Link href="/manage-groups/">Groups</Nav.Link>
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
