import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from "../../redux/actions/authActions";
import HomePage from "../../components/Home/HomePage";

class Home extends Component {
  displayHomePage(username, token) {
    if (!token || !username) {
      return <div>loading...</div>;
    }
    return <HomePage token={token} username={username} />;
  }

  render() {
    return this.displayHomePage(
      this.props.auth.user.username,
      this.props.auth.user.token
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: authActions,
    dispatch
  };
}
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
