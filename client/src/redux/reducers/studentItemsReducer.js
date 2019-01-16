import initialState from "./initialState";
import {
  FETCH_STUDENT_ITEMS,
  RECEIVE_STUDENT_ITEMS,
  ADD_STUDENT_ITEMS,
  SET_ITEM_TYPE
} from "../actions/actionTypes";

export default function studentWords(
  state = initialState.studentWords,
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
      console.log("RECEIVE_STUDENT_ITEMS Action");
      return newState;
    case SET_ITEM_TYPE:
      console.log("SET_ITEMS Action", action.items);
      return Object.assign({}, state, {
        itemType: action.items
      });
    default:
      return state;
  }
}
