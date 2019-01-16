import * as types from "./actionTypes";
// import history from "../../history";

function getStudentApi(id) {
  return `http://localhost:5000/api/details/${id}`;
}
function addStudentItemsApi() {
  return "http://localhost:5000/api/add-item-to-student";
}

function getUnknownItemsApi(id, itemType) {
  return `http://localhost:5000/api/unknown-items/${id}/${itemType}`;
}

export function receiveStudent(student) {
  return { type: types.RECEIVE_STUDENT, student: student };
}

export function addStudentItems(studentItems, user, itemType) {
  return dispatch => {
    return fetch(addStudentItemsApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify({ studentItems, itemType })
    })
      .then(() => dispatch(fetchStudent(studentItems.student, user)))
      .then(() => dispatch(fetchUnknownItems(studentItems.student, user)));
  };
}

export function receiveUnknownItems(unknownItems) {
  console.log(unknownItems, "unknown items");
  return { type: types.RECEIVE_UNKNOWN_ITEMS, unknownItems: unknownItems };
}

export function fetchUnknownItems(student, user, itemType) {
  console.log("fetch unknown items", student, user, itemType);
  return dispatch => {
    return fetch(getUnknownItemsApi(student, itemType), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(unknownItems => dispatch(receiveUnknownItems(unknownItems)));
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
