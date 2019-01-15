import initialState from "./initialState";
import {
  FETCH_ITEMS,
  RECEIVE_ITEMS,
  SET_ITEM_TYPE
} from "../actions/actionTypes";

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

    case SET_ITEM_TYPE:
      console.log("SET_ITEMS Action", action.items);
      return Object.assign({}, state, {
        itemType: action.items
      });
    default:
      return state;
  }
}
