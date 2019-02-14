import initialState from "./initialState";
import { FETCH_ITEMS, RECEIVE_ITEMS } from "../actions/actionTypes";

export default function items(state = initialState.items, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return action.items;
    case RECEIVE_ITEMS:
      console.log("action", action);
      return Object.assign({}, action.items);
    default:
      return state;
  }
}
