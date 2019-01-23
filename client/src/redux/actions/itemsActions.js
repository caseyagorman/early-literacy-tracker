import * as types from "./actionTypes";
import history from "../../history";
function getStudentsApi(user) {
  return "http://localhost:5000/api/students";
}
function getStudentApi(id) {
  return `http://localhost:5000/api/details/${id}`;
}
function getItemsApi(itemType) {
  return `http://localhost:5000/api/items/${itemType}`;
}

function getItemApi(itemType, id) {
  return `http://localhost:5000/api/item-detail/${itemType}/${id}`;
}
function addItemApi() {
  return "http://localhost:5000/api/add-item";
}
function deleteItemApi() {
  return "http://localhost:5000/api/delete-item";
}

function addStudentItemsApi() {
  return "http://localhost:5000/api/add-new-items-to-students";
}

function getUnassignedItemsApi(id, itemType) {
  return `http://localhost:5000/api/unassigned-items/${id}/${itemType}`;
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
  console.log("fetching item", id, itemType);
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
  console.log(item, user, itemType);
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
          .then(() => history.push("/students"))
      );
  };
}

export function deleteItem(item, itemType, user) {
  console.log(item, itemType, user);
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
  console.log("assignStudentItems", studentItems, "user", user);
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
    // .then(() => dispatch(fetchStudent(studentItems.student, user)))
    // .then(() => dispatch(fetchUnassignedItems(studentItems.student, user)));
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
