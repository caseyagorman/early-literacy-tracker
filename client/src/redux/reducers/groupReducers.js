import initialState from "./initialState";
import { FETCH_GROUP, RECEIVE_GROUP } from "../actions/actionTypes";

export default function group(state = initialState.group, action) {
  switch (action.type) {
    case FETCH_GROUP:
      return action;

    case RECEIVE_GROUP:
      return Object.assign({}, state, action.group);

    default:
      return state;
  }
}
