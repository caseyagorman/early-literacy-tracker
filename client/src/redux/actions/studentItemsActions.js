import * as types from "./actionTypes";
// import history from "../../history";

function getStudentApi(id) {
  return `http://localhost:5000/api/details/${id}`;
}
function addStudentItemsApi() {
  return "http://localhost:5000/api/add-item-to-student";
}

function getUnassignedItemsApi(id, itemType) {
  return `http://localhost:5000/api/unassigned-items/${id}/${itemType}`;
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
      .then(() => dispatch(fetchUnassignedItems(studentItems.student, user)));
  };
}

export function receiveUnassignedWords(studentUnassignedWords) {
  return {
    type: types.RECEIVE_STUDENT_UNASSIGNED_WORDS,
    studentUnassignedWords: studentUnassignedWords
  };
}
export function receiveUnassignedLetters(studentUnassignedLetters) {
  return {
    type: types.RECEIVE_STUDENT_UNASSIGNED_LETTERS,
    studentUnassignedLetters: studentUnassignedLetters
  };
}
export function receiveUnassignedSounds(studentUnassignedSounds) {
  return {
    type: types.RECEIVE_STUDENT_UNASSIGNED_SOUNDS,
    studentUnassignedSounds: studentUnassignedSounds
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
      .then(unassignedItems => sortItems(unassignedItems, dispatch));
  };
}

export function sortItems(unassignedItems, dispatch) {
  if (unassignedItems[1] === "words") {
    console.log(unassignedItems);
    dispatch(receiveUnassignedWords(unassignedItems[0]));
  } else if (unassignedItems[1] === "letters") {
    receiveUnassignedLetters(unassignedItems[0]);
  } else if (unassignedItems[1] === "sounds") {
    receiveUnassignedSounds(unassignedItems[0]);
  }
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
