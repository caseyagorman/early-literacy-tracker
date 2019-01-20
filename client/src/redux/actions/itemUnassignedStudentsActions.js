import * as types from "./actionTypes";

function getUnassignedStudentsApi(id) {
  return `http://localhost:5000/api/unassigned-students/${id}`;
}

function getItemApi(itemType, id) {
  return `http://localhost:5000/api/item-detail/${itemType}/${id}`;
}
function addItemStudentsApi() {
  return "http://localhost:5000/api/add-student-to-item";
}

export function receiveItem(item) {
  return { type: types.RECEIVE_ITEM, item: item };
}

export function receiveItemUnassignedStudents(itemUnassignedStudents) {
  return {
    type: types.RECEIVE_ITEM_UNASSIGNED_STUDENTS,
    itemUnassignedStudents: itemUnassignedStudents
  };
}

export function fetchUnassignedStudents(item, user, itemType) {
  return dispatch => {
    return fetch(getUnassignedStudentsApi(item, itemType), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(itemStudents =>
        dispatch(receiveItemUnassignedStudents(itemStudents))
      );
  };
}

export function assignItemStudents(id, students, itemType, user) {
  console.log(id, students, itemType, user);
  return dispatch => {
    return fetch(addItemStudentsApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify({ id, students, itemType })
    })
      .then(response => response.json())
      .then(() =>
        dispatch(fetchItem(id, itemType, user)).then(() =>
          dispatch(fetchUnassignedStudents(id, user))
        )
      );
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
    // .then(itemType =>dispatch(setItemType(itemType)))
  };
}
