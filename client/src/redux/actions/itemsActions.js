import * as types from "./actionTypes";
import history from "../../history";
function getStudentApi(id) {
  return `http://localhost:5000/api/details/${id}`;
}
function getWordsApi() {
  return "http://localhost:5000/api/words";
}
function getLettersApi() {
  return "http://localhost:5000/api/letters";
}
function getSoundsApi() {
  return "http://localhost:5000/api/sounds";
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
  return "http://localhost:5000/api/add-items-to-students";
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

export function fetchWords(user) {
  return dispatch => {
    return fetch(getWordsApi(), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(words => dispatch(receiveItems(words)));
  };
}

export function fetchLetters(user) {
  return dispatch => {
    return fetch(getLettersApi(user), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(letters => dispatch(receiveItems(letters)));
    // .then(itemType =>dispatch(setItemType(itemType)))
  };
}

export function fetchSounds(user) {
  return dispatch => {
    return fetch(getSoundsApi(user), {
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
export function addWord(item, user, itemType) {
  console.log(item, itemType, user);
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
      .then(
        studentItems => dispatch(assignStudentItems(user, studentItems))
        // .then(() => dispatch(fetchWords(user)))
        // .then(() => history.push("/words"))
      );
  };
}
export function addLetter(item, user, itemType) {
  return dispatch => {
    return fetch(addItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      },
      body: JSON.stringify(item, itemType)
    })
      .then(() => dispatch(fetchLetters(user)))
      .then(() => history.push("/letters"));
  };
}
export function addSound(item, user, itemType) {
  return dispatch => {
    return fetch(addItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      },
      body: JSON.stringify(item, itemType)
    })
      .then(() => dispatch(fetchSounds(user, itemType)))
      .then(() => history.push("/sounds"));
  };
}

export function deleteWord(user, item, itemType) {
  return dispatch => {
    return fetch(deleteItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify(item, itemType)
    })
      .then(() => dispatch(fetchWords(user)))
      .then(() => history.push("/words"));
  };
}
export function deleteLetter(user, item, itemType) {
  return dispatch => {
    return fetch(deleteItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify(item, itemType)
    })
      .then(() => dispatch(fetchLetters(user)))
      .then(() => history.push("/letters"));
  };
}
export function deleteSound(user, item, itemType) {
  return dispatch => {
    return fetch(deleteItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify(item, itemType)
    })
      .then(() => dispatch(fetchSounds(user)))
      .then(() => history.push("/sounds"));
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
