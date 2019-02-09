// import React from "react";
// import {
//   Navbar,
//   NavItem,
//   Nav,
//   MenuItem,
//   NavDropdown,
//   Glyphicon
// } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
// import "./static/appNav.css";
// const AppNavPage = props => {
//   return (
//     <Navbar collapseOnSelect expand="lg" id="navbar">
//       <Navbar.Header>
//         <Navbar.Brand>
//           <a href="/students" id="Brand">
//             TrackIt
//           </a>
//         </Navbar.Brand>
//         <Navbar.Toggle />
//       </Navbar.Header>
//       <Navbar.Collapse>
//         <Nav>
//           <NavItem id="Students" eventKey={1}>
//             <NavDropdown eventKey={3} title="Students" id="drop-down">
//               <LinkContainer to="/students" id="Students">
//                 <MenuItem id="Students">View Students</MenuItem>
//               </LinkContainer>
//               <LinkContainer id="Students" to="/student-charts/words/">
//                 <MenuItem id="Students">View Student Word Charts</MenuItem>
//               </LinkContainer>
//               <LinkContainer id="Students" to="/student-charts/letters/">
//                 <MenuItem id="Students" href="/student-charts/letters/">
//                   View Student Letter Charts
//                 </MenuItem>
//               </LinkContainer>
//               <LinkContainer id="Students" to="/student-charts/sounds/">
//                 <MenuItem id="Students" href="/student-charts/sounds/">
//                   View Student Sound Charts
//                 </MenuItem>
//               </LinkContainer>
//               <LinkContainer to="/add-student" id="Students">
//                 <MenuItem id="Students">Add Students</MenuItem>
//               </LinkContainer>
//             </NavDropdown>
//           </NavItem>
//           <NavItem id="Words" eventKey={2}>
//             <NavDropdown title="Words" id="drop-down">
//               <LinkContainer id="Words" to="/items/words/">
//                 <MenuItem id="Words">View Words</MenuItem>
//               </LinkContainer>
//               <LinkContainer id="Words" to="/item-charts/words/">
//                 <MenuItem id="Words">View Word Charts</MenuItem>
//               </LinkContainer>
//               <LinkContainer id="Words" to="/add-items/words/">
//                 <MenuItem id="Words">Add Words</MenuItem>
//               </LinkContainer>
//             </NavDropdown>
//           </NavItem>
//           <NavItem id="Letters" eventKey={2}>
//             <NavDropdown eventKey={3} title="Letters" id="drop-down">
//               <LinkContainer to="/items/letters/" id="Letters">
//                 <MenuItem id="Letters">View Letters</MenuItem>
//               </LinkContainer>
//               <LinkContainer id="Letters" to="/item-charts/letters/">
//                 <MenuItem id="Letters">View Letter Charts</MenuItem>
//               </LinkContainer>
//               <LinkContainer to="/add-items/letters/">
//                 <MenuItem id="Letters">Add Letters</MenuItem>
//               </LinkContainer>
//             </NavDropdown>
//           </NavItem>
//           <NavItem id="Sounds">
//             <NavDropdown title="Sounds" id="drop-down">
//               <LinkContainer to="/items/sounds/" id="Sounds">
//                 <MenuItem id="Sounds">View Sounds</MenuItem>
//               </LinkContainer>
//               <LinkContainer to="/item-charts/sounds/" id="Sounds">
//                 <MenuItem id="Sounds">View Sound Charts</MenuItem>
//               </LinkContainer>
//               <LinkContainer to="/add-items/sounds/">
//                 <MenuItem id="Sounds">Add Sounds</MenuItem>
//               </LinkContainer>
//             </NavDropdown>
//           </NavItem>
//           <NavItem id="Students">
//             <NavDropdown title="Reading" id="drop-down">
//               <LinkContainer to="/reading-level-charts/" id="Students">
//                 <MenuItem id="Students">View Reading Level Charts</MenuItem>
//               </LinkContainer>
//             </NavDropdown>
//           </NavItem>
//           <NavItem id="Students">
//             <NavDropdown title="Groups" id="drop-down">
//               <LinkContainer to="/create-group/" id="Students">
//                 <MenuItem id="Students">Create Group</MenuItem>
//               </LinkContainer>
//               <LinkContainer to="/manage-groups/" id="Students">
//                 <MenuItem id="Students"> View/Manage Groups</MenuItem>
//               </LinkContainer>
//             </NavDropdown>
//           </NavItem>
//         </Nav>
//         <Nav pullRight>
//           <NavItem id="Logout" eventKey={5} href={props.route}>
//             {props.navText} <span />
//             <Glyphicon
//               glyph="glyphicon glyphicon-off"
//               onClick={props.submit}
//               id="trash-can"
//             />
//           </NavItem>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default AppNavPage;

import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
