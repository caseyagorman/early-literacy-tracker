import * as types from "./actionTypes";

function assignGroupApi() {
  return "http://localhost:5000/api/assign-group";
}

function addGroupApi() {
  return "http://localhost:5000/api/add-group";
}
export function receiveStudent(student) {
  return { type: types.RECEIVE_STUDENT, student: student };
}

export function assignGroup(students, groupName, user) {
  return dispatch => {
    return fetch(assignGroupApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      },
      body: JSON.stringify({ students, groupName })
    }).then(response => response.json());
  };
}

export function addGroup(groupName, user) {
  console.log("groupName", groupName);
  return fetch(addGroupApi(), {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": user
    },
    body: JSON.stringify(groupName)
  }).then(response => response.json());
}
