import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class DropdownBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown
        style={{ display: "inline-block" }}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle className="student-detail-dropdown" caret>
          {this.props.actionType}
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          <DropdownItem>{this.props.wordAction}</DropdownItem>
          <DropdownItem>{this.props.letterAction}</DropdownItem>
          <DropdownItem>{this.props.soundAction}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
