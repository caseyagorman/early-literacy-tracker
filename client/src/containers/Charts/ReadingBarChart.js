import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class ReadingLevelBarChart extends Component {
  displayChart(dataResults) {
    if (!dataResults) {
      return <div> loading...</div>;
    }
    let reading_levels = Object.keys(dataResults);
    let students = Object.values(dataResults);
    let studentCounts = [];
    for (let i = 0; i < students.length; i++) {
      studentCounts.push(students[i].length);
    }

    let options = {
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            const indice = tooltipItem.index;
            return students[indice];
          }
        }
      },

      responsive: true,

      maintainAspectRatio: true,
      aspectRatio: 1,
      scales: {
        lable: [
          {
            fontSize: 18,
            fontFamily: "Krub",
            fontColor: "black"
          }
        ],
        yAxes: [
          {
            ticks: {
              fontFamily: "Krub",
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
              fontFamily: "Krub",
              fontSize: 18,
              fontColor: "black"
            }
          }
        ]
      }
    };
    const data = {
      labels: reading_levels,

      datasets: [
        {
          label: "Students",

          backgroundColor: "#44857D",
          borderColor: "#44857D",
          borderWidth: 1,
          hoverBackgroundColor: "#44857D",
          hoverBorderColor: "#44857D",
          data: studentCounts
        }
      ]
    };

    return <Bar height={200} width={400} data={data} options={options} />;
  }
  render() {
    return this.displayChart(this.props.readingLevels);
  }
}

export default ReadingLevelBarChart;
