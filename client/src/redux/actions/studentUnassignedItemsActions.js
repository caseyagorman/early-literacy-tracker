import * as types from "./actionTypes";
import history from "../../history";

function getUnassignedItemsApi(itemType) {
  return `http://localhost:5000/api/item_list/${itemType}`;
}

function getStudentApi(id) {
  return `http://localhost:5000/api/details/${id}`;
}

function addStudentItemsApi() {
  return "http://localhost:5000/api/add-item-to-student";
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

export function fetchUnassignedItems(user, itemType) {
  return dispatch => {
    return fetch(getUnassignedItemsApi(itemType), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(studentItems =>
        dispatch(receiveStudentUnassignedItems(studentItems))
      );
    // .then(studentItems =>
    //   history.push(
    //     `add-items/${studentItems.studentUnassignedItems.itemType}`
    //   )
    // );
  };
}

export function assignStudentItems(studentItems, user) {
  return dispatch => {
    return fetch(addStudentItemsApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify({ studentItems })
    })
      .then(() => dispatch(fetchStudent(studentItems.student, user)))
      .then(() => dispatch(fetchUnassignedItems(studentItems.student, user)));
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
