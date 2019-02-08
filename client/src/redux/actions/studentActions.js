import * as types from "./actionTypes";
import history from "../../history";
import { fetchStudents } from "./studentsActions";
function addStudentApi() {
  return "http://54.68.30.124/api/add-student";
}
function getStudentApi(id) {
  return `http://54.68.30.124/api/details/${id}`;
}
function deleteStudentApi() {
  return "http://54.68.30.124/api/delete-student";
}

export function receiveStudents(students) {
  return { type: types.RECEIVE_STUDENTS, students: students };
}

export function receiveStudent(student) {
  return { type: types.RECEIVE_STUDENT, student: student };
}

export function deleteStudent(student, user) {
  return dispatch => {
    return fetch(deleteStudentApi(), {
      method: "POST",
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
