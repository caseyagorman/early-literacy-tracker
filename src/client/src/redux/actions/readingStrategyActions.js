import history from "../../history";
import * as types from "./actionTypes";
function getReadingStrategiesApi() {
  return "/api/get-reading-strategiess";
}
function getStudentReadingStrategiesApi() {
  return "/api/student-reading-strategies";
}
function assignReadingStrategiesApi() {
  return "/api/assign-reading-strategies";
}
function getStudentApi(id) {
  return `/api/students/${id}`;
}

export function receiveReadingStrategies(readingStrategies) {
  return {
    type: types.RECEIVE_READING_STRATEGIES,
    readingStrategies: readingStrategies
  };
}
export function receiveStudent(student) {
  return { type: types.RECEIVE_STUDENT, student: student };
}

export function fetchStudentReadingStrategies(user) {
  return dispatch => {
    return fetch(getStudentReadingStrategiesApi(), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(readingStrategies =>
        dispatch(receiveReadingStrategies(readingStrategies))
      );
  };
}

export function fetchReadingStrategies(user) {
  return dispatch => {
    return fetch(getReadingStrategiesApi(), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(readingStrategies =>
        dispatch(receiveReadingStrategies(readingStrategies))
      );
  };
}

export function assignReadingStrategies(readingStrategies, user, student) {
  return dispatch => {
    return fetch(assignReadingStrategiesApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      },
      body: JSON.stringify({ readingStrategies, student })
    })
      .then(response => response.json())
      .then(() => dispatch(fetchStudent(student, user)))
      .then(() => history.push(`/students/${student}`));
  };
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