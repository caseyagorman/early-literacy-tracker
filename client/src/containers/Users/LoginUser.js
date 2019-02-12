import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";
import LoginUserForm from "../../components/Users/LoginUserForm";
import AppNavLogin from "../../components/Navbar/AppNavLogin";
import { ToastContainer, ToastStore } from "react-toasts";
class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(newProps) {
    if (!newProps.auth.loginError.error && newProps.auth.isAuthenticated) {
      this.updateInput("token", newProps.auth.user.token);
      this.updateInput("username", newProps.auth.user.username);
      this.props.history.push("/students");
    } /* else if (newProps.auth.loginError.error === "incorrect password") {
      this.props.authActions.clearErrors();
      let errorMessage = "incorrect password";
      return this.displayToast(errorMessage);
    }*/
  }

  displayToast(error) {
    return (
      <div>
        {ToastStore.error(error)}
        <ToastContainer store={ToastStore} />
      </div>
    );
  }
  updateInput(key, value) {
    localStorage.setItem(key, value);
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
    let route = "/login";
    let navText = "Login";
    return (
      <div>
        <AppNavLogin route={route} navText={navText} />
        <LoginUserForm
          username={this.state.username}
          password={this.state.password}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          loginError={this.loginError}
        />

        <ToastContainer store={ToastStore} />
      </div>
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
)(LoginUser);
