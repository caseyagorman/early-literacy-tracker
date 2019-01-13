import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from "../../redux/actions/authActions";
import HomePage from "../../components/Home/HomePage";

class Home extends Component {
  displayHomePage(username, token) {
    console.log("token", token, "username", username);
    if (!token || !username) {
      return <div>loading...</div>;
    }
    return (
      <div id="homepage">
        <HomePage token={token} username={username} />
      </div>
    );
  }

  render() {
    return (
      <div id="homepage">
        {this.displayHomePage(
          this.props.auth.user.username,
          this.props.auth.user.token
        )}
      </div>
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
