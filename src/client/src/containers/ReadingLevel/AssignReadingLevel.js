import React from "react";
import AssignReadingLevelForm from "../Forms/AssignReadingLevelForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as readingLevelActions from "../../redux/actions/readingLevelActions";
import "../../components/Forms/static/form.css";
class AssignReadingLevel extends React.Component {
  componentDidMount() {
    const user = this.props.auth.user.token;
    this.props.readingLevelActions.fetchReadingLevels(user);
  }

  displayAssignReadingLevelForm(readingLevels) {
    let student = this.props.id;
    if (readingLevels === null) {
      return <p />;
    }
    return (
      <AssignReadingLevelForm itemList={readingLevels} student={student} />
    );
  }

  render() {
    return this.displayAssignReadingLevelForm(this.props.readingLevels);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    readingLevelActions: bindActionCreators(readingLevelActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    readingLevels: state.readingLevels,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignReadingLevel);
