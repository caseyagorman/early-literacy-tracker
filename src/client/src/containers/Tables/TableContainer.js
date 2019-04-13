import React, { Component } from "react";
import moment from "moment";

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.sortArray = this.sortArray.bind(this);
    this.sortDates = this.sortDates.bind(this);
    this.sortWrapper = this.sortWrapper.bind(this);
    this.onSort = this.onSort.bind(this);
    this.state = {
      sortKey: undefined,
      reverseSort: false
    };
  }

  componentDidMount() {
    if (!this.props.actions) {
      return <div> </div>;
    }
  }

  sortDates(array, sortKey, reverseSort) {
    array = array.slice();
    if (sortKey) {
      array.sort((a, b) => {
        const dateA = moment(a[sortKey]).valueOf();
        const dateB = moment(b[sortKey]).valueOf();
        return dateB - dateA;
      });
    }
    if (reverseSort) {
      array.reverse();
    }

    return array;
  }

  sortArray(array, sortKey, reverseSort) {
    array = array.slice();
    if (sortKey) {
      array.sort(function(a, b) {
        return a[sortKey] < b[sortKey] ? 1 : a[sortKey] > b[sortKey] ? -1 : 0;
      });
    }
    if (reverseSort) {
      array.reverse();
    }
    return array;
  }

  sortWrapper(array, sortKey, reverseSort) {
    const dateKeys = [
      "lastLetterTest",
      "lastReadingLevelUpdate",
      "lastSoundTest",
      "lastWordTest"
    ];
    if (dateKeys.indexOf(sortKey) !== -1) {
      return this.sortDates(array, sortKey, reverseSort);
    } else {
      return this.sortArray(array, sortKey, reverseSort);
    }
  }

  onSort(e, sortKey) {
    // TODO: Set state using Object.assign, etc
    // If we clicked the column that we're already using to sort the table,
    // reverse the order.
    const newReverseSort =
      sortKey === this.state.sortKey
        ? !this.state.reverseSort
        : this.state.reverseSort;
    this.setState({
      sortKey: sortKey,
      reverseSort: newReverseSort
    });
  }

  render() {
    let actions = this.props.actions;
    let route = this.props.route;
    // let tableElements = this.sortArray(
    //   this.props.tableElements,
    //   this.state.sortKey,
    //   this.state.reverseSort
    // );
    let tableElements = this.sortWrapper(
      this.props.tableElements,
      this.state.sortKey,
      this.state.reverseSort
    );

    return this.props.renderTable(
      tableElements,
      this.onSort,
      route,
      this.props.itemType,
      actions
    );
  }
}

export default TableContainer;
