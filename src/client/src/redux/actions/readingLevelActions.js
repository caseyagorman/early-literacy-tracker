
import history from "../../history";
import * as types from "./actionTypes";

import {
  getReadingLevelApi,
  getStudentReadingLevelsApi,
  assignReadingLevelApi,
  getStudentApi
} from './apiUrls';

import {fetchStudent} from './studentActions';


export function receiveReadingLevels(readingLevels) {
  return { type: types.RECEIVE_READING_LEVELS, readingLevels: readingLevels };
}
export function receiveStudent(student) {
  return { type: types.RECEIVE_STUDENT, student: student };
}

export function fetchStudentReadingLevels(user) {
  return dispatch => {
    return fetch(getStudentReadingLevelsApi(), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(readingLevels => dispatch(receiveReadingLevels(readingLevels)));
  };
}

export function fetchReadingLevels(user) {
  return dispatch => {
    return fetch(getReadingLevelApi(), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(readingLevels => dispatch(receiveReadingLevels(readingLevels)));
  };
}

export function assignReadingLevel(readingLevel, user, student) {
  return dispatch => {
    return fetch(assignReadingLevelApi(student[0]), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      },
      body: JSON.stringify({ readingLevel, student })
    })
      .then(response => response.json())
      .then(() => dispatch(fetchStudent(student, user)))
      .then(() => history.push(`/students/${student}`));
  };
}