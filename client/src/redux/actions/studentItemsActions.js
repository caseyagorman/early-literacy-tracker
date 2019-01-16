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

export function receiveUnknownWords(studentUnknownWords) {
  return {
    type: types.RECEIVE_STUDENT_UNKNOWN_WORDS,
    studentUnknownWords: studentUnknownWords
  };
}
export function receiveUnknownLetters(studentUnknownLetters) {
  console.log(studentUnknownLetters, "unknown letters");
  return {
    type: types.RECEIVE_STUDENT_UNKNOWN_LETTERS,
    studentUnknownLetters: studentUnknownLetters
  };
}
export function receiveUnknownSounds(studentUnknownSounds) {
  console.log(studentUnknownSounds, "unknown sounds");
  return {
    type: types.RECEIVE_STUDENT_UNKNOWN_SOUNDS,
    studentUnknownSounds: studentUnknownSounds
  };
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
      .then(unknownItems => sortItems(unknownItems, dispatch));
  };
}

export function sortItems(unknownItems, dispatch) {
  if (unknownItems[1] === "words") {
    console.log(unknownItems);
    dispatch(receiveUnknownWords(unknownItems[0]));
  } else if (unknownItems[1] === "letters") {
    receiveUnknownLetters(unknownItems[0]);
  } else if (unknownItems[1] === "sounds") {
    receiveUnknownSounds(unknownItems[0]);
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
