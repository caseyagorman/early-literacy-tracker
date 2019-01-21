import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class ItemBarChart extends Component {
  turnIntoArray(obj) {
    console.log("obj", obj);
    if (!obj) {
      return <p>Loading...</p>;
    }
    let itemCounts = [];
    let studentList = [];
    // let itemList = [];
    for (let item in obj) {
      itemCounts.push(obj[item].count);
      // studentList.push(obj[item].unlearned_students);
      // itemCounts.push(obj[item].item_list);
    }
    // console.log("itemCounts", itemCounts, "studentList", studentList);
    return [itemCounts];
  }

  displayChart(dataResults) {
    console.log("items", dataResults);
    if (!dataResults) {
      return <div> loading...</div>;
    }
    let items = this.turnIntoArray(dataResults.items);

    let itemCounts = items[0];
    //
    return <div />;
  }
  render() {
    return <div />;
    // return this.displayChart(this.props.items);
  }
}

export default ItemBarChart;
