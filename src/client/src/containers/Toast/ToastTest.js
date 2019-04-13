import { ToastContainer, ToastStore } from "react-toasts";
import React, { Component } from "react";
class ToastTest extends Component {
  render() {
    return (
      <div>
        <button onClick={() => ToastStore.error("There is an error :'(")}>
          Click me !
        </button>
        <ToastContainer store={ToastStore} />
      </div>
    );
  }
}
export default ToastTest;
