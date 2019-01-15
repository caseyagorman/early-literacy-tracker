import { Component } from "react";

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

  sortArray(array, sortKey, reverseSort) {
    console.log(array);
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
    let route = this.props.route;
    let token = this.props.token;
    let tableElements = this.sortArray(
      this.props.tableElements,
      this.state.sortKey,
      this.state.reverseSort
    );

    return this.props.renderTable(tableElements, this.onSort, token, route);
  }
}

export default TableContainer;
