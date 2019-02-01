import React from "react";
import AssignReadingLevelPage from "../../components/Items/AssignItemsPage";
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
    if (readingLevels === null) {
      return <p>loading...</p>;
    }
    return (
      <div className="container">
        {console.log("reading levels", readingLevels)}
        {/* <AssignReadingLevelPage listTitle={readingLevels} /> */}
      </div>
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
