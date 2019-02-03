import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as groupActions from "../../redux/actions/groupsActions";
// import Deletegroup from "../Forms/Deletegroup";
import GroupDetailPage from "../../components/Groups/GroupDetailPage";
class groupDetail extends Component {
  componentDidMount() {
    const group = this.props.match.params.group;
    const user = this.props.auth.user.token;
    this.props.groupsActions.fetchgroup(group, user);
  }

  displaygroupDetail(group) {
    if (group === null) {
      return <div>loading...</div>;
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
)(groupDetail);
