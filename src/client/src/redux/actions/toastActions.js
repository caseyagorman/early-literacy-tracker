
import createToast from "../../containers/Toast/createToast";
import { ADD_TOAST, REMOVE_TOAST } from "./actionTypes";

export function addToast(options = {}) {
  return {
    toast: createToast(options),
    type: ADD_TOAST
  };
}

export function removeToast(id) {
  return {
    toast: id,
    type: REMOVE_TOAST
  };
}