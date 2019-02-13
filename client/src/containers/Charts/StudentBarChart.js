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
    let totalItemCount = 0;
    const itemsDict = {
      words: {
        unlearnedItemList: "unlearnedWordList",
        itemList: "wordList",
        learnedCount: "wordCount",
        unlearnedCount: "unlearnedWordCount",
        totalCount: "totalWordCount"
      },
      letters: {
        unlearnedItemList: "unlearnedLetterList",
        itemList: "letterList",
        learnedCount: "letterCount",
        unlearnedCount: "unlearnedLetterCount",
        totalCount: "totalLetterCount"
      },
      sounds: {
        unlearnedItemList: "unlearnedSoundList",
        itemList: "soundList",
        learnedCount: "soundCount",
        unlearnedCount: "unlearnedSoundCount",
        totalCount: "totalSoundCount"
      }
    };
    let itemType = this.props.itemType;
    const itemsKey = itemsDict[itemType];
    for (let student in obj) {
      if (this.props.chartType === "learned") {
        let item = obj[student];
        itemCounts.push(item[itemsKey.learnedCount]);
        studentList.push(item.name.split(" ")[0]);
        itemList.push(item[itemsKey.itemList]);
        totalItemCount = item[itemsKey.totalCount];
      } else if (this.props.chartType === "unlearned") {
        let item = obj[student];
        itemCounts.push(item[itemsKey.unlearnedCount]);
        studentList.push(item.name.split(" ")[0]);
        itemList.push(item[itemsKey.unlearnedItemList]);
        totalItemCount = item[itemsKey.totalCount];
      }
    }

    return [itemCounts, studentList, itemList, totalItemCount, itemType];
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
      return <div> </div>;
    }
    let items = this.turnIntoArray(dataResults);

    let itemCounts = items[0];
    let studentList = items[1];
    let itemList = items[2];
    let totalItemCount = items[3];
    let itemType = items[4];

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
              suggestedMax: totalItemCount,
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
      labels: studentList,

      datasets: [
        {
          label: this.props.chartType + " " + itemType,

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
    return this.displayChart(this.props.students);
  }
}

export default StudentBarChart;
