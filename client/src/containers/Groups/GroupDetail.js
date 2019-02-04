import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as groupActions from "../../redux/actions/groupActions";
import { Link } from "react-router-dom";
// import Deletegroup from "../Forms/Deletegroup";
import GroupDetailPage from "../../components/Groups/GroupDetailPage";
class GroupDetail extends Component {
  componentDidMount() {
    const group = this.props.match.params.group;
    const user = this.props.auth.user.token;
    this.props.groupActions.fetchGroup(group, user);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.group !== this.props.match.params.group) {
      let user = this.props.auth.user.token;
      let group = this.props.match.params.group;
      this.props.groupActions.fetchGroup(group, user);
    }
  }

  getReadingLevels(group) {
    let readingLevels = Object.keys(group.readingLevels);
    let unique1 = readingLevels.filter(o => group.students.indexOf(o) === -1);
    let unique2 = group.students.filter(o => readingLevels.indexOf(o) === -1);
    const noLevels = unique1.concat(unique2);
    let newReadingLevels = group.readingLevels;
    for (let i = 0; i < noLevels.length; i++) {
      newReadingLevels[noLevels[i]] = " ";
    }
  }
  displayGroupDetail(group) {
    console.log("group detail", group);
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
    let readingLevels = this.getReadingLevels(group);
    return <GroupDetailPage group={group} readingLevels={readingLevels} />;
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
