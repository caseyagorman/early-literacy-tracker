import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";
import RequestResetPasswordPage from "../../components/Users/RequestResetPasswordPage";
import { ToastContainer, ToastStore } from "react-toasts";
class RequestResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateInput(key, value) {
    localStorage.setItem(key, value);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    let user = this.state.email;

    this.props.authActions.requestResetPassword(user);
    return this.displayToast("password link sent!");
  }

  displayToast(message) {
    return (
      <div>
        {ToastStore.success(message)}
        <ToastContainer
          position={ToastContainer.POSITION.TOP_RIGHT}
          store={ToastStore}
        />
      </div>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <RequestResetPasswordPage
          email={this.state.email}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ToastContainer
          position={ToastContainer.POSITION.TOP_RIGHT}
          store={ToastStore}
        />
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
)(RequestResetPassword);
