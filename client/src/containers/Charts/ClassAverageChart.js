import React, { Component } from "react";
import StudentDetailBarChart from "./StudentDetailBarChart";

class ClassAverageChart extends Component {
  displayClassAverageBarChart(student) {
    console.log("class average bar chart", student);
    if (!student) {
      return <div />;
    }
    if (student === null) {
      return <div />;
    }
    let classAverages = student.classAverages;
    let wordSum = student.classAverages["wordLists"].map(item => item.length);
    wordSum = wordSum.reduce(add, 0);
    let wordLength = classAverages["wordLists"].length;
    let letterSum = student.classAverages["letterLists"].map(
      item => item.length
    );
    letterSum = letterSum.reduce(add, 0);
    let letterLength = classAverages["letterLists"].length;
    let soundSum = student.classAverages["soundLists"].map(item => item.length);
    soundSum = soundSum.reduce(add, 0);
    let soundLength = classAverages["soundLists"].length;

    function add(a, b) {
      return a + b;
    }

    let allStudentLetterCounts = Math.round(letterSum / letterLength);
    let allStudentWordCounts = Math.round(wordSum / wordLength);
    let allStudentSoundCounts = Math.round(soundSum / soundLength);
    console.log("all student word counts", allStudentWordCounts);
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
    return this.displayClassAverageBarChart(this.props.student);
  }
}

export default ClassAverageChart;
