import initialState from "./initialState";
import {
  FETCH_ITEM,
  RECEIVE_ITEM,
  SET_ITEM_TYPE
} from "../actions/actionTypes";

export default function items(state = initialState.item, action) {
  switch (action.type) {
    case FETCH_ITEM:
      return Object.assign({}, state, {
        fetchingItem: true
      });
    case RECEIVE_ITEM:
      return Object.assign({}, state, action.item);

    case SET_ITEM_TYPE:
      return Object.assign({}, state, {
        itemType: action.item
      });
    default:
      return state;
  }
}
