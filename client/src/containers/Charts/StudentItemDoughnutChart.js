import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import "../../components/Charts/static/charts.css";

class StudentItemDoughnutChart extends Component {
  formatArray(tooltipItem) {
    return " " + tooltipItem;
  }
  displayChart(student) {
    if (!student) {
      return <div> loading...</div>;
    }

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
        itemList: "soundList",
        learnedCount: "soundCount",
        unlearnedCount: "unlearnedSoundCount"
      }
    };
    let itemType = this.props.itemType;
    const itemsKey = itemsDict[itemType];
    let unlearnedCount = student[itemsKey.unlearnedCount];
    let learnedCount = student[itemsKey.learnedCount];
    let itemList = student[itemsKey.itemList];
    let unlearnedItemList = student[itemsKey.unlearnedItemList];

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
          label: function(tooltipItem) {
            const indice = tooltipItem.index;
            return tooltipData[indice];
          }
        }
      }
    };
    return (
      <div className="student-doughnut-chart">
        <Doughnut height={"500px"} options={options} data={data} />
      </div>
    );
  }
  render() {
    return this.displayChart(this.props.student);
  }
}

export default StudentItemDoughnutChart;
