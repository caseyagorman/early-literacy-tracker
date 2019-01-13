import React, { Component } from "react";
import * as authActions from "../redux/actions/authActions";
import { connect } from "react-redux";

class AuthUser extends Component {
  componentDidMount() {
    console.log("auth user", this.props);
    if (localStorage) {
      this.props.authActions.checkUser(localStorage);
    } else {
      console.log("no!");
    }
  }
  render() {
    return;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: authActions,
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthUser);
