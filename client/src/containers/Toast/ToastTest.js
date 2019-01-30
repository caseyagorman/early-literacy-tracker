import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Toasts from "./Toasts";
import * as toastActions from "../../redux/actions/toastActions";

class ToastTest extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log("this.props", this.props, "prevProps", prevProps);
  }

  handleClick() {
    const { addToast } = this.props.toastActions;
    addToast({ text: "Hello, World!" });
  }

  render() {
    return (
      <main>
        <section>
          <h1>It's getting toasty!</h1>
          <p>Click the button below to dispatch a toast notification.</p>
          <button onClick={this.handleClick}>Dispatch</button>
        </section>
        <Toasts />
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toastActions: bindActionCreators(toastActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(ToastTest);
