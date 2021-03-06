import React, { Component } from "react";
import RegisterUserForm from "../../components/Users/RegisterUserForm";
import { connect } from "react-redux";
import { ToastContainer, ToastStore } from "react-toasts";
import * as registrationActions from "../../redux/actions/registerActions";
import * as authActions from "../../redux/actions/authActions";
import { bindActionCreators } from "redux";
import AppNavLogin from "../../components/Navbar/AppNavLogin";
import "../../components/Users/static/user.css";
import "react-toastify/dist/ReactToastify.css";
class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "", confirmPassword: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.authActions.clearErrors();
  }

  componentDidUpdate(prevProps) {
    if (!this.props.registerUser.newUser) {
      return <div />;
    }
    if (
      this.props.registerUser.newUser !== null &&
      !this.props.registerUser.newUser.error
    ) {
      this.props.registrationActions.clearUser();
      return this.props.history.push("/login");
    } else if (this.props.registerUser.newUser.error) {
      let errorMessage = this.props.registerUser.newUser.error;
      return this.displayToast(errorMessage);
    }
  }

  displayToast(error) {
    this.props.registrationActions.clearUser();
    return (
      <div>
        {ToastStore.error(error)}
        <ToastContainer store={ToastStore} />
      </div>
    );
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.password !== this.state.confirmPassword) {
      this.props.authActions.clearErrors(this.props.registerUser);
      event.target.reset();
      return;
    } else {
      let newUser = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      };
      this.props.registrationActions.registerUser(newUser);
      event.target.reset();
    }
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

        <RegisterUserForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
        <ToastContainer store={ToastStore} />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    registrationActions: bindActionCreators(registrationActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    registerUser: state.registerUser,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterUser);
