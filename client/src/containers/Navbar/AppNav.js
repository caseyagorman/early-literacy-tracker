import React, { Component } from "react";
import { connect } from "react-redux";
import AppNavPage from "../../components/Navbar/AppNavPage";

class AppNav extends Component {
  displayNavbar(user) {
    console.log("user", user);
    return <AppNavPage />;
    //
    // if (!user || user.user === null) {
    //   let route = "/login";
    //   let navText = "Login";
    //   return <AppNavPage route={route} navText={navText} />;
    // } else if (user.user != null) {
    //   let route = "/logout";
    //   let navText = "Logout";
    //   return <AppNavPage route={route} navText={navText} />;
    // }
  }
  render() {
    return this.displayNavbar(this.props.auth);
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(AppNav);
