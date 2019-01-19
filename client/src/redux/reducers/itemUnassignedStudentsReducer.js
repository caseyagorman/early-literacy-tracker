import initialState from "./initialState";
import {
  FETCH_ITEM_UNASSIGNED_STUDENTS,
  RECEIVE_ITEM_UNASSIGNED_STUDENTS
} from "../actions/actionTypes";

export default function itemUnassignedStudents(
  state = initialState.itemUnassignedStudents,
  action
) {
  switch (action.type) {
    case FETCH_ITEM_UNASSIGNED_STUDENTS:
      return action;

    case RECEIVE_ITEM_UNASSIGNED_STUDENTS:
      console.log("RECEIVE_ITEMS", action.itemUnassignedStudents);
      return Object.assign({}, state, action.itemUnassignedStudents, {
        fetchingItems: false
      });

    default:
      return state;
  }
}
