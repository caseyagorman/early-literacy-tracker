import initialState from "./initialState";
import { FETCH_STUDENTS, RECEIVE_STUDENTS } from "../actions/actionTypes";

export default function students(state = initialState.students, action) {
  switch (action.type) {
    case FETCH_STUDENTS:
      return action;
    case RECEIVE_STUDENTS:
      return Object.assign({}, state, {
        students: action.students
      });
    default:
      return state;
  }
}
