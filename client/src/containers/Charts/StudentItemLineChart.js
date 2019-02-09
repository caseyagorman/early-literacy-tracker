import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "../../components/Charts/static/charts.css";

class StudentItemLineChart extends Component {
  getChartData(data) {
    if (!data) {
      return <div />;
    }
    let dates = [];
    let scores = [];

    let itemType = this.props.itemType;

    if (data.testData[itemType]) {
      data = data.testData[itemType].studentTestList;
      for (let i = 0; i < data.length; i++) {
        scores.push(data[i].score);
        dates.push(data[i].testDate);
      }
    }
    return this.displayChartData(dates, scores);
  }

  displayChartData(dates, scores) {
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
              suggestedMax: 100,
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
              fontSize: 10,
              fontColor: "black"
            }
          }
        ]
      }
    };
    const data = {
      labels: dates,
      datasets: [
        {
          label:
            this.props.itemType.charAt(0).toUpperCase() +
            this.props.itemType.slice(1, -1) +
            " test" +
            " score ",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgb(0, 61, 89, 0.7)",
          borderColor: "rgb(0, 61, 89, 0.7)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(0, 61, 89, 0.7)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 61, 89, 0.7)",
          pointHoverBorderColor: "rgb(0, 61, 89, 0.7)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: scores
        }
      ]
    };
    return (
      <div className="student-line-chart">
        <Line
          id="student-line-chart"
          height={"300px"}
          width={"500px"}
          options={options}
          data={data}
        />
      </div>
    );
  }

  render() {
    return this.getChartData(this.props.testResults);
  }
}

export default StudentItemLineChart;
