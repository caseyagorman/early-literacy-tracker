import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class StudentItemDoughnutChart extends Component {
  componentDidMount() {
    console.log("student item doughnut chart props", this.props);
  }
  formatArray(tooltipItem) {
    return " " + tooltipItem;
  }
  displayChart(student) {
    if (!student) {
      return <div> loading...</div>;
    }
    console.log("student", student);

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
      <div>
        <h3>Percentage of {itemType} learned</h3>
        <Doughnut options={options} data={data} />
      </div>
    );
    //   } else if (itemType === "letters") {
    //     let unlearnedCount = student.unlearnedLetterCount;
    //     let learnedCount = student.letterCount;
    //     let itemList = student.letterList;
    //     let unlearnedItemList = student.unlearnedLetterList;
    //     let learnedItems = itemList.map(item => this.formatArray(item.item));
    //     let unlearnedItems = unlearnedItemList.map(item =>
    //       this.formatArray(item.item)
    //     );
    //     let tooltipData = [learnedItems, unlearnedItems];

    //     const data = {
    //       labels: [`Learned ${itemType}`, `Unlearned ${itemType}`],
    //       datasets: [
    //         {
    //           data: [learnedCount, unlearnedCount],
    //           backgroundColor: ["#008000", "#ff3333"],
    //           hoverBackgroundColor: ["#008000", "#ff3333"]
    //         }
    //       ]
    //     };
    //     let options = {
    //       tooltips: {
    //         callbacks: {
    //           label: function(tooltipItem, data) {
    //             const indice = tooltipItem.index;
    //             return data.labels[indice] + ":" + tooltipData[indice];
    //           }
    //         }
    //       }
    //     };
    //     return (
    //       <div>
    //         <h3>Percentage of {itemType} learned</h3>
    //         <Doughnut options={options} data={data} />
    //       </div>
    //     );
    //   } else if (itemType === "sounds") {
    //     let unlearnedCount = student.unlearnedSoundCount;
    //     let learnedCount = student.soundCount;
    //     let itemList = student.soundList;
    //     let unlearnedItemList = student.unlearnedSoundList;
    //     let learnedItems = itemList.map(item => this.formatArray(item.item));
    //     let unlearnedItems = unlearnedItemList.map(item =>
    //       this.formatArray(item.item)
    //     );
    //     let tooltipData = [learnedItems, unlearnedItems];

    //     const data = {
    //       labels: [`Learned ${itemType}`, `Unlearned ${itemType}`],
    //       datasets: [
    //         {
    //           data: [learnedCount, unlearnedCount],
    //           backgroundColor: ["#008000", "#ff3333"],
    //           hoverBackgroundColor: ["#008000", "#ff3333"]
    //         }
    //       ]
    //     };
    //     let options = {
    //       tooltips: {
    //         callbacks: {
    //           label: function(tooltipItem, data) {
    //             const indice = tooltipItem.index;
    //             return data.labels[indice] + ":" + tooltipData[indice];
    //           }
    //         }
    //       }
    //     };
    //     return (
    //       <div>
    //         <h3>Percentage of {itemType} learned</h3>
    //         <Doughnut options={options} data={data} />
    //       </div>
    //     );
    //   }
    // }
  }
  render() {
    return this.displayChart(this.props.student);
  }
}

export default StudentItemDoughnutChart;
