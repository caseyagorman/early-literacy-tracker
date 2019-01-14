import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";
import React from "react";
class Logout extends Component {
  componentDidMount() {
    const user = this.props.auth.user.token;
    this.props.authActions.logoutUser(user);
    this.handleLogout();
  }

  handleLogout() {
    localStorage.clear();
    this.props.history.push("/login/");
  }

  render() {
    return <div />;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
