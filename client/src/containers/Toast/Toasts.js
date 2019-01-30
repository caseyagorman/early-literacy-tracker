import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Toast from "./Toast";
import * as toastActions from "../../redux/actions/toastActions";
const Toasts = ({ toastActions, toast }) => {
  if (toast === null) {
    console.log("wait for toast");
    return <div />;
  }
  const { removeToast } = toastActions;
  return (
    <ul className="toasts">
      {console.log("toast.map is not a function", toast)}
      {/* {toast.map(toast => {
        const { id } = toast;
        return (
          <Toast {...toast} key={id} onDismissClick={() => removeToast(id)} />
        );
      })} */}
    </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  toastActions: bindActionCreators(toastActions, dispatch)
});

const mapStateToProps = state => ({
  toast: state.toast
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toasts);

// {toast.map(toast => {
//   const { id } = toast;
//   return (
//     <Toast {...toast} key={id} onDismissClick={() => removeToast(id)} />
//   );
// })}
