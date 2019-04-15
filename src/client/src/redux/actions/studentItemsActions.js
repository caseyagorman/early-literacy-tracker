import * as types from "./actionTypes";
import history from "../../history";

function getStudentApi(id) {
  return `/api/students/${id}`;
}

function getUnassignedItemsApi(id, itemType) {
  return `/api/unassigned-items/${id}/${itemType}`;
}

function getMarkStudentItemLearnedApi() {
  return "/api/mark-items-learned";
}
function getMarkStudentItemUnLearnedApi() {
  return "/api/mark-items-unlearned";
}
export function receiveStudent(student) {
  return { type: types.RECEIVE_STUDENT, student: student };
}

export function receiveStudentUnassignedItems(studentUnassignedItems) {
  return {
    type: types.RECEIVE_STUDENT_UNASSIGNED_ITEMS,
    studentUnassignedItems: studentUnassignedItems
  };
}

export function receiveStudentItems(studentItems) {
  return {
    type: types.RECEIVE_STUDENT_ITEMS,
    studentItems: studentItems
  };
}

export function markStudentItemLearned(studentId, item, user) {
  return dispatch => {
    return fetch(getMarkStudentItemLearnedApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify({ studentId, item })
    })
      .then(response => response.json())
      .then(studentId => dispatch(fetchStudent(studentId, user)));
  };
}

export function markStudentItemUnlearned(studentId, item, user) {
  return dispatch => {
    return fetch(getMarkStudentItemUnLearnedApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify({ studentId, item })
    })
      .then(response => response.json())
      .then(studentId => dispatch(fetchStudent(studentId, user)));
  };
}

export function fetchUnassignedItems(student, user, itemType) {
  return dispatch => {
    return fetch(getUnassignedItemsApi(student, itemType), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(studentItems => dispatch(receiveStudentItems(studentItems)));
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