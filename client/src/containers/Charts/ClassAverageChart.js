import React, { Component } from "react";
import StudentDetailBarChart from "./StudentDetailBarChart";

class ClassAverageChart extends Component {
  displayClassAverageBarChart(students, student) {
    if (!students) {
      return <div>loading...</div>;
    }
    if (students === null) {
      return <div>sploading...</div>;
    }
    let wordSum = students.students[0].allStudentWordCounts.reduce(add, 0);
    let letterSum = students.students[0].allStudentLetterCounts.reduce(add, 0);
    let soundSum = students.students[0].allStudentSoundCounts.reduce(add, 0);
    let wordLength = students.students[0].allStudentWordCounts.length;
    let letterLength = students.students[0].allStudentLetterCounts.length;
    let soundLength = students.students[0].allStudentSoundCounts.length;
    function add(a, b) {
      return a + b;
    }

    let allStudentLetterCounts = wordSum / wordLength;
    let allStudentWordCounts = letterSum / letterLength;
    let allStudentSoundCounts = soundSum / soundLength;
    return (
      <StudentDetailBarChart
        allStudentLetterCounts={allStudentLetterCounts}
        allStudentWordCounts={allStudentWordCounts}
        allStudentSoundCounts={allStudentSoundCounts}
        student={student}
      />
    );
  }
  render() {
    return this.displayClassAverageBarChart(
      this.props.students,
      this.props.student
    );
  }
}

export default ClassAverageChart;
