import * as types from "./actionTypes";
import history from "../../history";
function getStudentsApi(user) {
  return "http://54.68.30.124/api/students";
}
function getStudentApi(id) {
  return `http://54.68.30.124/api/details/${id}`;
}
function getItemsApi(itemType) {
  return `http://54.68.30.124/api/items/${itemType}`;
}

function getItemApi(itemType, id) {
  return `http://54.68.30.124/api/item-detail/${itemType}/${id}`;
}
function addItemApi() {
  return "http://54.68.30.124/api/add-item";
}
function deleteItemApi() {
  return "http://54.68.30.124/api/delete-item";
}
function addCustomStudentItemsApi() {
  return "http://54.68.30.124/api/add-custom-item";
}

function addStudentItemsApi() {
  return "http://54.68.30.124/api/add-new-items-to-students";
}

function getUnassignedItemsApi(id, itemType) {
  return `http://54.68.30.124/api/unassigned-items/${id}/${itemType}`;
}
function assignCustomStudentItemsApi() {
  return "http://54.68.30.124/api/add-custom-items-to-student";
}

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
          .then(() => alert("added!"))
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
export function fetchStudents(user) {
  return dispatch => {
    return fetch(getStudentsApi(user), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(students => dispatch(receiveStudents(students)));
  };
}
