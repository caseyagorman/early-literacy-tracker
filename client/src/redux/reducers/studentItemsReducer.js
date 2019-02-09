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
      return action;
    case ADD_STUDENT_ITEMS:
      newState = action.studentItems;
      const placeholder = {};
      placeholder[action.itemType] = action.studentItems;
      let itemSets = state.studentItemSets;
      itemSets = Object.assign({}, itemSets, placeholder);
      return newState;

    case RECEIVE_STUDENT_ITEMS:
      // const items = action.studentItems[0];
      let itemType = action.studentItems[1];
      const oldStudentItemSets = state.studentItemSets;
      let newStudentItems = action.studentItems[0];
      let newStudentItemSets = {};
      newStudentItemSets[itemType] = newStudentItems;
      newStudentItemSets = Object.assign(
        {},
        oldStudentItemSets,
        newStudentItemSets
      );
      const newState = Object.assign({}, state, {
        studentItemSets: newStudentItemSets
      });
      return newState;

    default:
      return state;
  }
}
