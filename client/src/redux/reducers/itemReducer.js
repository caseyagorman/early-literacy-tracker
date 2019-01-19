import initialState from "./initialState";
import {
  FETCH_ITEM,
  RECEIVE_ITEM,
  SET_ITEM_TYPE
} from "../actions/actionTypes";

export default function items(state = initialState.item, action) {
  switch (action.type) {
    case FETCH_ITEM:
      console.log("FETCH_ITEM Action");
      return Object.assign({}, state, {
        fetchingItem: true
      });
    case RECEIVE_ITEM:
      console.log("RECEIVE_ITEMS", action.item);
      return Object.assign({}, state, action.item, {
        fetchingItems: false
      });

    case SET_ITEM_TYPE:
      console.log("SET_ITEMS Action", action.item);
      return Object.assign({}, state, {
        itemType: action.item
      });
    default:
      return state;
  }
}
