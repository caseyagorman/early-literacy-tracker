import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class StudentBarChart extends Component {
  componentDidMount() {
    console.log("student detail bar chart", this.props.allStudentLetterCounts);
  }
  getChartColor() {
    if (this.props.chartType === "learned") {
      let chartColor = "#44857D";
      return chartColor;
    } else {
      let chartColor = "#FE6625";
      return chartColor;
    }
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
    let stuff = [
      studentWordCounts,
      classAverageWords,
      studentLetterCounts,
      classAverageLetters,
      studentSoundCounts,
      classAverageSounds
    ];
    console.log("data", stuff);
    let options = {
      //       //   tooltips: {
      //       //     callbacks: {
      //       //       label: function(tooltipItem) {
      //       //         const indice = tooltipItem.index;
      //       //         return itemList[indice];
      //       //       }
      //       //     }
      //       //   },

      responsive: true,

      maintainAspectRatio: true,
      aspectRatio: 1,
      scales: {
        lable: [
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
            }
          }
        ]
      }
    };
    const data = {
      labels: "",

      datasets: [
        {
          label: [
            "Student Words",
            "Class Average Words",
            "Student Letters",
            "Class Average Letters",
            "Student Sounds",
            "Class Average Sounds"
          ],

          backgroundColor: ["red", "blue", "green", "blue", "red", "blue"],
          //   borderColor: this.getChartColor(),
          //   borderWidth: 1,
          //   hoverBackgroundColor: this.getChartColor(),
          //   hoverBorderColor: this.getChartColor(),
          data: stuff
        }
      ]
    };
    return (
      <Bar
        id="bar-chart"
        height="500px"
        width="700px"
        data={data}
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
