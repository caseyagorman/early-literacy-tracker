import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class StudentBarChart extends Component {
  turnIntoArray(obj) {
    if (!obj) {
      return <p>Loading...</p>;
    }
    let itemCounts = [];
    let studentList = [];
    let itemList = [];
    const itemsDict = {
      words: {
        unlearnedItemList: "unlearnedWordList",
        itemList: "wordList",
        learnedCount: "wordCount",
        unlearnedCount: "unlearnedWordCount"
      },
      letters: {
        unlearnedItemList: "unlearnedLetterList",
        itemList: "letterList",
        learnedCount: "letterCount",
        unlearnedCount: "unlearnedLetterCount"
      },
      sounds: {
        unlearnedItemList: "unlearnedSoundList",
        itemList: "letterList",
        learnedCount: "soundCount",
        unlearnedCount: "unlearnedLetterCount"
      }
    };
    let itemType = this.props.itemType;
    const itemsKey = itemsDict[itemType];
    for (let student in obj) {
      if (this.props.chartType === "learned") {
        let item = obj[student];
        itemCounts.push(item[itemsKey.learnedCount]);
        studentList.push(item.name);
        itemList.push(item[itemsKey.itemList]);
      } else if (this.props.chartType === "unlearned") {
        let item = obj[student];
        itemCounts.push(item[itemsKey.unlearnedCount]);
        studentList.push(item.name);
        itemList.push(item[itemsKey.unlearnedItemList]);
      }

      return [itemCounts, studentList, itemList];
    }
  }

  getChartColor() {
    if (this.props.chartType === "learned") {
      let chartColor = "#008000";
      return chartColor;
    } else {
      let chartColor = "#ff3333";
      return chartColor;
    }
  }

  displayChart(dataResults) {
    if (!dataResults) {
      return <div> loading...</div>;
    }
    console.log("dataResults", dataResults);
    let items = this.turnIntoArray(dataResults);

    let itemCounts = items[0];
    let studentList = items[1];
    let itemList = items[2];

    let options = {
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            const indice = tooltipItem.index;
            return itemList[indice];
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
            fontColor: "black"
          }
        ],
        yAxes: [
          {
            ticks: {
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
      labels: studentList,

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
    return <Bar data={data} options={options} />;
  }
  render() {
    return this.displayChart(this.props.students);
  }
}

export default StudentBarChart;
