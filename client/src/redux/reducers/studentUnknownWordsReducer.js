import initialState from "./initialState";
import { RECEIVE_STUDENT_UNKNOWN_WORDS } from "../actions/actionTypes";

export default function studentUnknownWords(
  state = initialState.studentUnknownWords,
  action
) {
  let newState;
  switch (action.type) {
    case RECEIVE_STUDENT_UNKNOWN_WORDS:
      newState = action.studentUnknownWords;
      console.log("RECEIVE_STUDENT_UNKNOWN_WORDS Action", newState);
      return newState;
    default:
      return state;
  }
}
