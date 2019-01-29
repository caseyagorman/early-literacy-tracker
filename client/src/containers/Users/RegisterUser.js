import React, { Component } from "react";
import RegisterUserForm from "../../components/Users/RegisterUserForm";
import { connect } from "react-redux";
import * as registrationActions from "../../redux/actions/registerActions";
import * as authActions from "../../redux/actions/authActions";
import { bindActionCreators } from "redux";
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
      alert(
        `Thanks for registering ${this.props.registerUser.newUser.username}!`
      );
      this.props.registrationActions.clearUser();
      return this.props.history.push("/login");
    } else if (this.props.registerUser.newUser.error) {
      let errorMessage = this.props.registerUser.newUser.error;
      alert(errorMessage);
      this.props.registrationActions.clearUser();
      //
      // event.target.reset();
      // TODO add toast message
    }
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.password !== this.state.confirmPassword) {
      alert("passwords do not match");
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
    return (
      <RegisterUserForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        value={this.state.value}
      />
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
