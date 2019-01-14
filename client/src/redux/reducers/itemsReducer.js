import initialState from "./initialState";
import { FETCH_ITEMS, RECEIVE_ITEMS } from "../actions/actionTypes";

export default function items(state = initialState.items, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      console.log("FETCH_ITEMS Action");
      return Object.assign({}, state, {
        fetchingItems: true
      });
    case RECEIVE_ITEMS:
      console.log("RECEIVE_ITEMS", action.items);
      return Object.assign({}, state, action.items, {
        fetchingItems: false
      });
    default:
      return state;
  }
}
