import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../redux/actions/studentActions";
import * as studentTestActions from "../../redux/actions/studentTestActions";
import StudentTest from "./StudentTest";
class TestStudent extends React.Component {
  componentDidMount() {
    console.log("TEST STUDENT", this.props);
    const id = this.props.match.params.id;
    const user = this.props.auth.user.token;
    this.props.studentActions.fetchStudent(id, user);
  }

  getWords(student) {
    if (!student) {
      return <p> Loading... </p>;
    }

    let words = this.turnIntoArray(student[1]);
    return (
      <StudentTest
        user={this.props.token}
        studentTestItems={words}
        student={student}
      />
    );
  }

  getLetters(student) {
    if (!student) {
      return <p> Loading... </p>;
    }
    let letters = this.turnIntoArray(student[2]);
    return (
      <StudentTest
        user={this.props.token}
        studentTestItems={letters}
        student={student}
      />
    );
  }

  getSounds(student) {
    if (!student) {
      return <p> Loading... </p>;
    }
    let sounds = this.turnIntoArray(student[3]);

    return (
      <StudentTest
        user={this.props.token}
        studentTestItems={sounds}
        student={student}
      />
    );
  }

  turnIntoArray(obj) {
    if (!obj) {
      return <p>Loading...</p>;
    }
    let list = [];
    for (let key in obj) {
      let newObj = obj[key];
      newObj = newObj[Object.keys(newObj)[0]];
      list.push(newObj);
    }
    return list;
  }

  renderTestFunction(student) {
    console.log("STUDENT", student, this.props.studentTest);
    if (!student) {
      return <div>loading...</div>;
    } else if (this.props.studentTest.testType === "word") {
      return this.getWords(student);
    } else if (this.props.studentTest.testType === "letter") {
      return this.getLetters(student);
    } else if (this.props.studentTest.testType === "sound") {
      return this.getSounds(student);
    }
  }

  render() {
    // return <div />;
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
