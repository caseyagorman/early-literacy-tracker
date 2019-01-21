import * as types from "./actionTypes";
import history from "../../history";
import { RECEIVE_TEST_RESULTS } from "./actionTypes";

function getStudentTestResultsApi(itemType, id) {
  return `http://localhost:5000//api/get-student-item-test/${itemType}/${id}`;
}

export function receiveStudentTestResults(student) {
  return { type: types.RECEIVE_TEST_RESULTS, student: student };
}

export function fetchStudentTestResults(user, itemType, id) {
  return dispatch => {
    return fetch(getStudentTestResultsApi(itemType, id), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    }).then(testResults => dispatch(receiveStudentTestResults(testResults)));
  };
}
