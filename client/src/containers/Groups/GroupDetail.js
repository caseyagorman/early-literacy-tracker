import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as groupActions from "../../redux/actions/groupActions";
import { Link } from "react-router-dom";
// import Deletegroup from "../Forms/Deletegroup";
import GroupDetailPage from "../../components/Groups/GroupDetailPage";
class GroupDetail extends Component {
  componentDidMount() {
    console.log("group detail props", this.props);
    const group = this.props.match.params.group;
    const user = this.props.auth.user.token;
    this.props.groupActions.fetchGroup(group, user);
  }

  componentDidUpdate(prevProps) {
    console.log("prev", prevProps);
    console.log("this", this.props);
    if (prevProps.match.params.group !== this.props.match.params.group) {
      let user = this.props.auth.user.token;
      let group = this.props.match.params.group;
      this.props.groupActions.fetchGroup(group, user);
    }
  }
  displayGroupDetail(group) {
    console.log(group, this.props.match.params);
    if (group === null || group.message) {
      return (
        <div
          className="container"
          style={{ textAlign: "center", fontFamily: "krub", color: "black" }}
        >
          <h1>No students yet!</h1>
          <br />
          <Link
            style={{ fontSize: 24, color: "#018f75" }}
            to={"/manage-groups/"}
          >
            Add students to group
          </Link>
        </div>
      );
    }
    return <GroupDetailPage group={group} />;
  }

  render() {
    return this.displayGroupDetail(this.props.group);
  }
}
function mapDispatchToProps(dispatch) {
  return {
    groupActions: bindActionCreators(groupActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    group: state.group,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDetail);
