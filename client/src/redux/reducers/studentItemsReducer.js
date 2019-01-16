import initialState from "./initialState";
import {
  FETCH_STUDENT_ITEMS,
  RECEIVE_STUDENT_ITEMS,
  ADD_STUDENT_ITEMS,
  SET_ITEM_TYPE
} from "../actions/actionTypes";

export default function studentItems(
  state = initialState.studentItems,
  action
) {
  let newState;
  switch (action.type) {
    case FETCH_STUDENT_ITEMS:
      console.log("FETCH_ITEMS Action");
      return action;
    case ADD_STUDENT_ITEMS:
      newState = action.studentItems;
      console.log("ADD_STUDENT_ITEMS Action");
      return newState;
    case RECEIVE_STUDENT_ITEMS:
      newState = action.studentItems;
      console.log("RECEIVE_STUDENT_ITEMS Action", newState);
      return newState;
    case SET_ITEM_TYPE:
      console.log("SET_STUDENT_ITEMS Action", action.studentItems);
      return Object.assign({}, state, {
        itemType: action.studentItems
      });
    default:
      return state;
  }
}
