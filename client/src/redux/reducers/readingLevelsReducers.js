import initialState from "./initialState";
import {
  FETCH_READING_LEVELS,
  RECEIVE_READING_LEVELS
} from "../actions/actionTypes";

export default function readingLevels(
  state = initialState.readingLevels,
  action
) {
  switch (action.type) {
    case FETCH_READING_LEVELS:
      return action;

    case RECEIVE_READING_LEVELS:
      return Object.assign({}, state, action.readingLevels);
    default:
      return state;
  }
}
