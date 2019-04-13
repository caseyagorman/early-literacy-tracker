import initialState from "./initialState";
import { FETCH_NOTES, RECEIVE_NOTES } from "../actions/actionTypes";

export default function notes(state = initialState.notes, action) {
  switch (action.type) {
    case FETCH_NOTES:
      return action;

    case RECEIVE_NOTES:
      return Object.assign({}, action.notes);

    default:
      return state;
  }
}
