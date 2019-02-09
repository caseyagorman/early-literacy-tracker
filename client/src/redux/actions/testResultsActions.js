import * as types from "./actionTypes";
import history from "../../history";

function getStudentTestResultsApi(itemType, id) {
  return `http://54.68.30.124/api/get-student-item-test/${itemType}/${id}`;
}

function getStudentAllTestsResultsApi(id) {
  return `http://54.68.30.124/api/get-all-student-tests/${id}`;
}

export function receiveTestResults(testResults) {
  return { type: types.RECEIVE_TEST_RESULTS, testResults: testResults };
}

export function fetchTestResults(user, itemType, id) {
  return dispatch => {
    return fetch(getStudentTestResultsApi(itemType, id), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(testResults => dispatch(receiveTestResults(testResults)));
  };
}

export function fetchAllTestResults(id, user) {
  return dispatch => {
    return fetch(getStudentAllTestsResultsApi(id), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(testResults => dispatch(receiveTestResults(testResults)));
  };
}
