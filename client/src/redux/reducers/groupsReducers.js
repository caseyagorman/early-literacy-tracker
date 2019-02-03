import initialState from "./initialState";
import { FETCH_GROUPS, RECEIVE_GROUPS } from "../actions/actionTypes";

export default function groups(state = initialState.groups, action) {
  switch (action.type) {
    case FETCH_GROUPS:
      return action;

    case RECEIVE_GROUPS:
      return Object.assign({}, state, action.groups);

    default:
      return state;
  }
}
