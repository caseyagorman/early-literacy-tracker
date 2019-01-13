import * as types from "./actionTypes";
function getStudentsApi(user) {
  return "http://localhost:5000/api/students";
}

export function receiveStudents(students) {
  console.log(students);
  return { type: types.RECEIVE_STUDENTS, students: students };
}

export function fetchStudents(user) {
  console.log("USER", user);
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
    .then(students => receiveStudents(students));
}
