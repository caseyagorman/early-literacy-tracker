import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../redux/actions/studentActions";
import * as studentTestActions from "../../redux/actions/studentTestActions";
import StudentTest from "./StudentTest";
class TestStudent extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    const user = this.props.auth.user.token;
    this.props.studentActions.fetchStudent(id, user);
  }

  turnIntoArray(obj) {
    if (!obj) {
      return <p>Loading...</p>;
    }
    let list = [];
    for (let key in obj) {
      let newObj = obj[key];
      list.push(newObj.item);
    }
    return list;
  }

  renderTestFunction(student) {
    if (!student) {
      return <div>loading...</div>;
    }
    const itemsDict = {
      words: "unlearnedWordList",
      letters: "unlearnedLetterList",
      sounds: "unlearnedSoundList"
    };
    const itemsKey = itemsDict[this.props.studentTest.testType];
    const items = this.turnIntoArray(student[itemsKey]);
    console.log("ITEMS", items);
    return (
      <StudentTest
        user={this.props.auth.user.token}
        studentTestItems={items}
        student={student}
      />
    );
  }

  render() {
    return this.renderTestFunction(this.props.student);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentActions: bindActionCreators(studentActions, dispatch),
    studentTestActions: bindActionCreators(studentTestActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    student: state.student,
    studentTest: state.studentTest,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestStudent);
