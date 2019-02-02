import * as types from "./actionTypes";
import history from "../../history";

function getStudentTestResultsApi(itemType, id) {
  return `http://localhost:5000/api/get-student-item-test/${itemType}/${id}`;
}

function getStudentAllTestsResultsApi(id) {
  return `http://localhost:5000/api/get-all-student-tests/${id}`;
}

export function receiveTestResults(testResults) {
  return { type: types.RECEIVE_TEST_RESULTS, testResults: testResults };
}

export function fetchTestResults(user, itemType, id) {
  console.log("fetching test results", user, itemType, id);
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
// return {
//     type: ADD_TOAST, toast: createToast()
//   };

export function fetchAllTestResults(id, user) {
  console.log("fetching all test results");
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
