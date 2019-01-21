import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class StudentItemDoughnutChart extends Component {
  formatArray(tooltipItem) {
    return " " + tooltipItem;
  }
  displayChart(student) {
    if (!student) {
      return <div> loading...</div>;
    }
    let itemType = this.props.match.params.itemType;
    if (itemType === "words") {
      let unlearnedCount = student.unlearnedWordCount;
      let learnedCount = student.wordCount;
      let itemList = student.wordList;
      let unlearnedItemList = student.unlearnedWordList;

      let learnedItems = itemList.map(item => this.formatArray(item.item));
      let unlearnedItems = unlearnedItemList.map(item =>
        this.formatArray(item.item)
      );
      let tooltipData = [learnedItems, unlearnedItems];

      const data = {
        labels: [`Learned ${itemType}`, `Unlearned ${itemType}`],
        datasets: [
          {
            data: [learnedCount, unlearnedCount],
            backgroundColor: ["#008000", "#ff3333"],
            hoverBackgroundColor: ["#008000", "#ff3333"]
          }
        ]
      };
      let options = {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              const indice = tooltipItem.index;
              return data.labels[indice] + ":" + tooltipData[indice];
            }
          }
        }
      };
      return (
        <div>
          <h3>Percentage of {itemType} learned</h3>
          <Doughnut options={options} data={data} />
        </div>
      );
    } else if (itemType === "letters") {
      let unlearnedCount = student.unlearnedLetterCount;
      let learnedCount = student.letterCount;
      let itemList = student.letterList;
      let unlearnedItemList = student.unlearnedLetterList;
      let learnedItems = itemList.map(item => this.formatArray(item.item));
      let unlearnedItems = unlearnedItemList.map(item =>
        this.formatArray(item.item)
      );
      let tooltipData = [learnedItems, unlearnedItems];

      const data = {
        labels: [`Learned ${itemType}`, `Unlearned ${itemType}`],
        datasets: [
          {
            data: [learnedCount, unlearnedCount],
            backgroundColor: ["#008000", "#ff3333"],
            hoverBackgroundColor: ["#008000", "#ff3333"]
          }
        ]
      };
      let options = {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              const indice = tooltipItem.index;
              return data.labels[indice] + ":" + tooltipData[indice];
            }
          }
        }
      };
      return (
        <div>
          <h3>Percentage of {itemType} learned</h3>
          <Doughnut options={options} data={data} />
        </div>
      );
    } else if (itemType === "sounds") {
      let unlearnedCount = student.unlearnedSoundCount;
      let learnedCount = student.soundCount;
      let itemList = student.soundList;
      let unlearnedItemList = student.unlearnedSoundList;
      let learnedItems = itemList.map(item => this.formatArray(item.item));
      let unlearnedItems = unlearnedItemList.map(item =>
        this.formatArray(item.item)
      );
      let tooltipData = [learnedItems, unlearnedItems];

      const data = {
        labels: [`Learned ${itemType}`, `Unlearned ${itemType}`],
        datasets: [
          {
            data: [learnedCount, unlearnedCount],
            backgroundColor: ["#008000", "#ff3333"],
            hoverBackgroundColor: ["#008000", "#ff3333"]
          }
        ]
      };
      let options = {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              const indice = tooltipItem.index;
              return data.labels[indice] + ":" + tooltipData[indice];
            }
          }
        }
      };
      return (
        <div>
          <h3>Percentage of {itemType} learned</h3>
          <Doughnut options={options} data={data} />
        </div>
      );
    }
  }

  render() {
    return this.displayChart(this.props.student);
  }
}

export default StudentItemDoughnutChart;
// let itemType = this.props.match.params.itemType.slice(0, -1);
// console.log(student, itemType.slice(0, -1));

// const learnedCount = itemType + "Count";
// const unlearnedCount =
//   "unlearned" +
//   itemType.charAt(0).toUpperCase() +
//   itemType.slice(1) +
//   "Count";
// console.log("learnedCount", learnedCount, unlearnedCount);
// console.log(student.learnedCount);
