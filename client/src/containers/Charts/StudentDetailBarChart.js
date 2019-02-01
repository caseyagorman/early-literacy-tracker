import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class StudentBarChart extends Component {
  componentDidMount() {
    console.log("student detail bar chart", this.props.allStudentLetterCounts);
  }
  displayChart(wordCounts, letterCounts, soundCounts, student) {
    if (!student) {
      return <div> loading...</div>;
    }
    let classAverageWords = wordCounts;
    let classAverageLetters = letterCounts;
    let classAverageSounds = soundCounts;
    let studentWordCounts = student.wordCount;
    let studentLetterCounts = student.letterCount;
    let studentSoundCounts = student.soundCount;
    let wordTotal = student.totalWordCount;
    let letterTotal = student.totalLetterCount;
    let soundTotal = student.totalSoundCount;
    let total = Math.max(wordTotal, letterTotal, soundTotal);
    let studentData = {
      label: student.student.name.split(" ")[0],
      data: [studentWordCounts, studentLetterCounts, studentSoundCounts],
      backgroundColor: "rgb(1, 143, 117, 0.8)"
    };

    let classAverage = {
      label: "Class Average",
      data: [classAverageWords, classAverageLetters, classAverageSounds],
      backgroundColor: "rgb(0, 61, 89, 0.8)"
    };

    let chartData = {
      labels: ["Words", "Letters", "Sounds"],
      datasets: [studentData, classAverage]
    };
    let options = {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1,
      scales: {
        label: [
          {
            fontSize: 18,
            fontColor: "black"
          }
        ],
        yAxes: [
          {
            ticks: {
              suggestedMax: total,
              fontSize: 14,
              fontColor: "black",
              beginAtZero: true,
              min: 0,
              userCallback: function(label) {
                if (Math.floor(label) === label) {
                  return label;
                }
              }
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              fontSize: 12,
              fontColor: "black"
            },
            categoryPercentage: 0.6
          }
        ]
      }
    };

    return (
      <Bar
        id="bar-chart"
        height="300px"
        width="600px"
        data={chartData}
        options={options}
      />
    );
  }

  render() {
    return this.displayChart(
      this.props.allStudentWordCounts,
      this.props.allStudentLetterCounts,
      this.props.allStudentSoundCounts,
      this.props.student
    );
  }
}

export default StudentBarChart;
