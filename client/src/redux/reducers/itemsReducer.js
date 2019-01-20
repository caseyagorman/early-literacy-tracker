import initialState from "./initialState";
import {
  FETCH_ITEMS,
  RECEIVE_ITEMS,
  SET_ITEM_TYPE
} from "../actions/actionTypes";

export default function items(state = initialState.items, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return Object.assign({}, state, {
        fetchingItems: true
      });
    case RECEIVE_ITEMS:
      return Object.assign({}, state, action.items, {
        fetchingItems: false
      });

    case SET_ITEM_TYPE:
      return Object.assign({}, state, {
        itemType: action.items
      });
    default:
      return state;
  }
}
