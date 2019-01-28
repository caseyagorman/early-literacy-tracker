import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";
import RetrievePasswordPage from "../../components/Users/RetrievePasswordPage";

class RetrievePassword extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //   componentDidUpdate(newProps) {
  //     if (!newProps.auth.loginError.error && newProps.auth.isAuthenticated) {
  //       this.updateInput("token", newProps.auth.user.token);
  //       this.updateInput("username", newProps.auth.user.username);
  //       this.props.history.push("/students");
  //     } else if (newProps.auth.loginError.error) {
  //       if (newProps.auth.loginError.error === "incorrect password") {
  //         alert(newProps.auth.loginError.error);
  //         return;
  //       }
  //       if (newProps.auth.loginError.error === "user does not exist") {
  //         alert(newProps.auth.loginError.error);
  //         newProps.history.push("/register/");
  //       }
  //     }
  //   }
  updateInput(key, value) {
    localStorage.setItem(key, value);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    let user = this.state.email;

    this.props.authActions.retrievePassword(user);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <RetrievePasswordPage
        email={this.state.email}
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
)(RetrievePassword);
