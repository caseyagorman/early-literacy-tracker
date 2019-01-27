import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "../../components/Charts/static/charts.css";

class StudentItemLineChart extends Component {
  getChartData(data) {
    console.log("data", data);
    if (!data) {
      return <div>loading...</div>;
    }
    let itemType = this.props.itemType;
    data = data.testData[itemType].studentTestList;
    console.log("new data", data);
    let dates = [];
    let scores = [];

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].score);
      scores.push(data[i].score);
      dates.push(data[i].testDate);
    }
    return this.displayChartData(dates, scores);
  }

  displayChartData(dates, scores) {
    let tooltipData = [dates];
    let options = {
      // tooltips: {
      //   callbacks: {
      //     label: function(tooltipItem) {
      //       const indice = tooltipItem.index;
      //       return tooltipData[indice];
      //     }
      //   }
      // },
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
          backgroundColor: "#0033ff",
          borderColor: "#0033ff",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
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
