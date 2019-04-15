import * as types from "./actionTypes";
import history from "../../history";
import {
  getItemsApi,
  getItemApi,
  addItemApi,
  addCustomStudentItemsApi,
  assignCustomStudentItemsApi,
  deleteItemApi,
  addStudentItemsApi,
  getStudentApi,
  getUnassignedItemsApi,
  getStudentsApi
} from "./apiUrls";

import {fetchStudents} from "./studentsActions"

import {fetchStudent} from "./studentActions"


export function receiveItem(item) {
  return { type: types.RECEIVE_ITEM, item: item };
}

export function receiveItems(items) {
  return { type: types.RECEIVE_ITEMS, items: items };
}

export function setItemType(itemType) {
  return { type: types.SET_ITEM_TYPE, itemType: itemType };
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
export function receiveStudents(students) {
  return { type: types.RECEIVE_STUDENTS, students: students };
}

export function fetchItems(user, itemType) {
  return dispatch => {
    return fetch(getItemsApi(itemType), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(items => dispatch(receiveItems(items)));
  };
}

export function fetchItem(id, itemType, user) {
  return dispatch => {
    return fetch(getItemApi(itemType, id), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(item => dispatch(receiveItem(item)));
  };
}
export function addItem(item, user, itemType) {
  return dispatch => {
    return fetch(addItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      },
      body: JSON.stringify({ item, itemType })
    })
      .then(response => response.json())
      .then(studentItems =>
        dispatch(assignStudentItems(user, studentItems))
          .then(() => dispatch(fetchStudents(user)))
          .then(() => history.push(`/add-items/${itemType}`))
      );
  };
}

export function addCustomItem(item, user, studentId, itemType) {
  return dispatch => {
    return fetch(addCustomStudentItemsApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      },
      body: JSON.stringify({ item, itemType, studentId })
    })
      .then(response => response.json())
      .then(studentItems =>
        dispatch(assignCustomStudentItems(user, studentItems, studentId))
          .then(() => dispatch(fetchStudents(user)))
          .then(() => history.push("/students"))
      );
  };
}

export function assignCustomStudentItems(user, studentItems, studentId) {
  return dispatch => {
    return fetch(assignCustomStudentItemsApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify({ studentItems, studentId })
    });
  };
}

export function deleteItem(item, itemType, user) {
  return dispatch => {
    return fetch(deleteItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify({ item, itemType })
    })
      .then(itemType => console.log(itemType))
      .then(() => dispatch(fetchItems(user, itemType)))
      .then(() => history.push(`/items/${itemType}`));
  };
}

export function assignStudentItems(user, studentItems) {
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
    });
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
      .then(studentItems =>
        dispatch(receiveStudentUnassignedItems(studentItems))
      );
  };
}
