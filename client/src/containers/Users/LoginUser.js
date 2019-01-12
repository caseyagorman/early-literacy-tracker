import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";
import LoginUserForm from "../../components/Users/LoginUserForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.auth.loginError.error && newProps.auth.isAuthenticated) {
      this.updateInput("token", newProps.auth.user.token);
      this.updateInput("username", newProps.auth.user.username);
      this.props.history.push("/");
    } else if (newProps.auth.loginError.error) {
      if (newProps.auth.loginError.error === "incorrect password") {
        alert(newProps.auth.loginError.error);
        return <div />;
      }
      if (newProps.auth.loginError.error === "user does not exist") {
        alert(newProps.auth.loginError.error);
        newProps.history.push("/register/");
      }
    }
  }
  updateInput(key, value) {
    sessionStorage.setItem(key, value);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.authActions.loginUser(user);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return <LoginUserForm />;
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
)(Login);
