import initialState from "./initialState";
import {
  FETCH_STUDENT_UNASSIGNED_ITEMS,
  RECEIVE_STUDENT_UNASSIGNED_ITEMS,
  ADD_STUDENT_UNASSIGNED_ITEMS
} from "../actions/actionTypes";

export default function studentItems(
  state = initialState.studentItems,
  action
) {
  let newState;
  switch (action.type) {
    case FETCH_STUDENT_UNASSIGNED_ITEMS:
      console.log("FETCH_ITEMS Action");
      return action;
    case ADD_STUDENT_UNASSIGNED_ITEMS:
      newState = action.studentItems;
      const placeholder = {};
      placeholder[action.itemType] = action.studentItems;
      let itemSets = state.studentItemSets;
      itemSets = Object.assign({}, itemSets, placeholder);
      return newState;

    case RECEIVE_STUDENT_UNASSIGNED_ITEMS:
      let itemType = action.studentUnassignedItems[1];
      const oldStudentItemSets = state.studentItemSets;
      let newStudentItems = action.studentUnassignedItems[0];
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
