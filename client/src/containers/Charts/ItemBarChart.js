import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class ItemBarChart extends Component {
  turnIntoArray(obj) {
    if (!obj) {
      return <p>Loading...</p>;
    }
    let itemCounts = [];
    let studentList = [];
    let itemList = [];
    let totalCount = 0;
    for (let item in obj) {
      if (this.props.chartType === "learned") {
        itemCounts.push(obj[item].count);
        studentList.push(obj[item].students);
        itemList.push(obj[item].item);
        totalCount = obj[item].totalCount;
      } else if (this.props.chartType === "unlearned") {
        itemCounts.push(obj[item].unlearnedCount);
        studentList.push(obj[item].unlearnedStudents);
        itemList.push(obj[item].item);
        totalCount = obj[item].totalCount;
      }
    }

    return [itemCounts, studentList, itemList, totalCount];
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

  displayChart(dataResults) {
    if (!dataResults) {
      return <div />;
    }

    let items = this.turnIntoArray(dataResults.items);

    let itemCounts = items[0];
    let studentList = items[1];
    let itemList = items[2];
    let totalCount = items[3];
    let options = {
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            const indice = tooltipItem.index;
            return studentList[indice];
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
              suggestedMax: totalCount,
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
              fontSize: 12,
              fontColor: "black"
            }
          }
        ]
      }
    };
    const data = {
      labels: itemList,

      datasets: [
        {
          label: "Students",

          backgroundColor: this.getChartColor(),
          borderColor: this.getChartColor(),
          borderWidth: 1,
          hoverBackgroundColor: this.getChartColor(),
          hoverBorderColor: this.getChartColor(),
          data: itemCounts
        }
      ]
    };
    return <Bar height={400} width={550} data={data} options={options} />;
  }
  render() {
    return this.displayChart(this.props.items);
  }
}

export default ItemBarChart;
