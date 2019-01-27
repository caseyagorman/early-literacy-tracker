import React, { Component } from "react";

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.sortArray = this.sortArray.bind(this);
    this.onSort = this.onSort.bind(this);
    this.state = {
      sortKey: undefined,
      reverseSort: false
    };
  }

  componentDidMount() {
    console.log("table container", this.props);
    if (!this.props.actions) {
      console.log("no actions");
      return <div> loading...</div>;
    }
    console.log(this.props.actions);
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
    let tableElements = this.sortArray(
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
