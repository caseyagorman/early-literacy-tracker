import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";
import HomePage from "../../components/Home/HomePage";

class Home extends Component {
  componentDidMount() {}

  displayHomePage() {
    if (this.props.auth.isAuthenticated === false) {
      return <div>loading...</div>;
    }
    return (
      <div id="homepage">
        <HomePage
          token={this.props.auth.user.token}
          username={this.props.auth.user.username}
        />
      </div>
    );
  }

  render() {
    return <div />;
    // return <div id="homepage">{this.displayHomePage()}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
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
