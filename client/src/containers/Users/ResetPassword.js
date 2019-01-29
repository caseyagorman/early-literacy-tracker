import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";
import ResetPasswordForm from "../../components/Users/ResetPasswordForm";
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

  componentDidMount() {
    this.props.authActions.clearErrors();
  }

  componentDidUpdate(prevProps) {
    if (!this.props.registerUser.newUser) {
      return <div />;
    }
    if (this.props.registerUser.newUser !== null) {
      alert(
        `Your password has been updated ${
          this.props.registerUser.newUser.username
        }!`
      );
      return this.props.history.push("/login");
    }
    if (prevProps.registerUser.newUser.registerErrorMessage) {
      alert(prevProps.registerUser.newUser.error);
      this.props.authActions.clearErrors();
    }
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
      <ResetPasswordForm
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
    registerUser: state.registerUser,
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
