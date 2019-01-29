import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";
import ResetPasswordPage from "../../components/Users/ResetPasswordPage";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { password: "", confirmPassword: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateInput(key, value) {
    localStorage.setItem(key, value);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    let user = {
      user: this.props.match.params.resetToken,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    this.props.authActions.resetPassword(user);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <ResetPasswordPage
        password={this.state.password}
        confirmPassword={this.state.confirmPassword}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
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
)(ResetPassword);
