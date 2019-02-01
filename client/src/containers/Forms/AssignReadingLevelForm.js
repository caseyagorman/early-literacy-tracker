import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as readingLevelActions from "../../redux/actions/readingLevelActions";
import AssignReadingLevelFormPage from "../../components/Forms/AssignReadingLevelFormPage";
import "../../components/Forms/static/form.css";
class AssignReadingLevelForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  componentDidMount() {
    console.log("assign reading level", this.props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const student = this.props.match.params.id;
    let readingLevel = this.state.value;
    const user = this.props.auth.user.token;
    this.props.readingActions.assignReadingLevel(readingLevel, user, student);
  }

  handleChange(e) {
    const options = e.target.options;
    let value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ value: value });
  }

  getOptions(itemList) {
    console.log("itemList", itemList);
    if (!itemList) {
      return <div>Loading!</div>;
    }
    itemList = Object.values(itemList);

    return (
      <AssignReadingLevelFormPage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        itemList={itemList}
      />
    );
  }

  render() {
    return this.getOptions(this.props.itemList);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    readingLevelActions: bindActionCreators(readingLevelActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignReadingLevelForm);
