import initialState from "./initialState";
import { FETCH_ITEMS, RECEIVE_ITEMS } from "../actions/actionTypes";

export default function items(state = initialState.items, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      console.log("FETCH_ITEMS Action");
      return action;
    case RECEIVE_ITEMS:
      console.log("RECEIVE_ITEMS", action.items);
      return Object.assign({}, state, {
        items: action.items
      });
    default:
      return state;
  }
}
