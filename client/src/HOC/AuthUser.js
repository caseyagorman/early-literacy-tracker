import React, { Component } from "react";
import * as authActions from "../redux/actions/authActions";
import { connect } from "react-redux";

class AuthUser extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenicated === false) {
      alert("Please log in");
      this.props.history.push("/login");
    }
  }
  render() {
    return this.props.children;
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
