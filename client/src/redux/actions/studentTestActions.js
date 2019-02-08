import * as types from "./actionTypes";
import history from "../../history";
import {
  STUDENT_TEST_ANSWER_QUESTION,
  STUDENT_TEST_BEGIN_TEST,
  STUDENT_TEST_CLEAR_TEST
} from "./actionTypes";

export function beginTest(testType) {
  return {
    type: STUDENT_TEST_BEGIN_TEST,
    payload: { testType }
  };
}

export function receiveStudentTest() {
  return {
    type: STUDENT_TEST_CLEAR_TEST
  };
}

export function answerQuestion(questionItem, answeredCorrectly) {
  return {
    type: STUDENT_TEST_ANSWER_QUESTION,
    payload: {
      testItem: questionItem,
      answeredCorrectly
    }
  };
}

function addTestApi() {
  return "http://34.217.207.162/api/create-student-test";
}

function getStudentApi(id) {
  return `http://34.217.207.162/api/details/${id}`;
}

export function submitStudentTest(studentTest, testType, studentId, user) {
  return dispatch => {
    return fetch(addTestApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify({ studentTest, testType, studentId })
    })
      .then(response => response.json())
      .then(() => dispatch(receiveStudentTest()))
      .then(() => dispatch(fetchStudent(studentId, user)))
      .then(() => history.push(`/details/${studentId}`));
  };
}
export function receiveStudent(student) {
  return { type: types.RECEIVE_STUDENT, student: student };
}

export function fetchStudent(student, user) {
  return dispatch => {
    return fetch(getStudentApi(student), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(student => dispatch(receiveStudent(student)));
  };
}
