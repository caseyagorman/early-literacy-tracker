import * as types from "./actionTypes";
import history from "../../history";

function getStudentsApi() {
  return "/api/students";
}

function getStudentNamesApi() {
  return "/api/stuents/names";
}

function addItemToNewStudentApi() {
  return "/api/add-items-to-new-students";
}

function addStudentApi() {
  return "/api/add-student";
}
function getStudentApi(id) {
  return `/api/students/${id}`;
}
function deleteStudentApi(id) {
  return `/api/students/${id}`;
}

export function receiveStudents(students) {
  return { type: types.RECEIVE_STUDENTS, students: students };
}

export function receiveStudent(student) {
  return { type: types.RECEIVE_STUDENT, student: student };
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
export function addStudent(students, user) {
  return fetch(addStudentApi(), {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": user
    },
    body: JSON.stringify(students)
  })
    .then(response => response.json())
    .then(students => addItemsToNewStudents(user, students));
}

export function addItemsToNewStudents(user, students) {
  return fetch(addItemToNewStudentApi(), {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": user
    },
    body: JSON.stringify(students)
  })
    .then(() => fetchStudents(user))
    .then(() => history.push("/students"));
}

export function deleteStudent(student, user) {
  return dispatch => {
    return fetch(deleteStudentApi(student), {
      method: "DELETE",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify(student)
    })
      .then(() => dispatch(fetchStudents(user)))
      .then(() => history.push("/students"));
  };
}

export function fetchStudentNames(user) {
  return dispatch => {
    return fetch(getStudentNamesApi(user), {
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