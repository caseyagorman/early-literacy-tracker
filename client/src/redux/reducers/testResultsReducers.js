import initialState from "./initialState";
import {
  FETCH_TEST_RESULTS,
  RECEIVE_TEST_RESULTS
} from "../actions/actionTypes";

export default function testResults(state = initialState.testResults, action) {
  switch (action.type) {
    case FETCH_TEST_RESULTS:
      return action;
    case RECEIVE_TEST_RESULTS:
      return action.testResults;
    default:
      return state;
  }
}
