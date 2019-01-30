import { ADD_TOAST, REMOVE_TOAST } from "../actions/actionTypes";
import initialState from "./initialState";

export default function toast(state = initialState.toast, action) {
  console.log("state", state, "action", action);
  switch (action.type) {
    case ADD_TOAST:
      console.log("action.type", action.type);
      return Object.assign({}, state, action.toast);

    case REMOVE_TOAST:
      console.log("state", state, "action.toast", action.toast);
      return { toast: state.filter(toast => toast.id !== toast) };

    //   case REMOVE_TOAST:
    //   return state.filter(toast => toast.id !== toast);

    default:
      return state;
  }
}
