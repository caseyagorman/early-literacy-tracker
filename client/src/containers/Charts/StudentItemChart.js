import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../redux/actions/studentActions";

class StudentItemChart extends Component {
  componentDidMount() {
    let studentId = this.props.match.params.id;
    if (!studentId) {
      return <div>loading...</div>;
    }
    const user = this.props.auth.user.token;
    this.props.studentActions.fetchStudent(studentId, user);
  }

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

      console.log(
        "chart data",
        unlearnedCount,
        learnedCount,
        itemList,
        unlearnedItemList
      );

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

      let learnedItems = itemList.map(item => this.formatArray(item.item));
      let unlearnedItems = itemList.map(item => this.formatArray(item.item));
      let tooltipData = [learnedItems, unlearnedItems];
      console.log("tooltip", tooltipData);
      //   const data = {
      //     labels: ["Learned sounds", "Unlearned sounds"],
      //     datasets: [
      //       {
      //         data: [learnedCount, unlearnedCount],
      //         backgroundColor: ["#008000", "#ff3333"],
      //         hoverBackgroundColor: ["#008000", "#ff3333"]
      //       }
      //     ]
      //   };
      //   let options = {
      //     tooltips: {
      //       callbacks: {
      //         label: function(tooltipItem, data) {
      //           const indice = tooltipItem.index;
      //           return data.labels[indice] + ":" + tooltipData[indice];
      //         }
      //       }
      //     }
      //   }
      // }
      //   return (
      //     <div>
      //       <h3>Percentage of assigned sounds learned</h3>
      //       <Doughnut options={options} data={data} />
      //     </div>
      //   );
    }
  }

  render() {
    return this.displayChart(this.props.student);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentActions: bindActionCreators(studentActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    student: state.student,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentItemChart);
