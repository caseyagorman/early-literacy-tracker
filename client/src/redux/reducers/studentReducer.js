import initialState from "./initialState";
import { FETCH_STUDENT, RECEIVE_STUDENT } from "../actions/actionTypes";

export default function student(state = initialState.student, action) {
  switch (action.type) {
    case FETCH_STUDENT:
      return action;
    case RECEIVE_STUDENT:
      console.log("RECEIVE STUDENT", action.student);
      return action.student;
    default:
      return state;
  }
}
