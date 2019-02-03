import * as types from "./actionTypes";
import history from "../../history";
function assignGroupApi() {
  return "http://localhost:5000/api/assign-group";
}

function addGroupApi() {
  return "http://localhost:5000/api/add-group";
}

function fetchGroupsApi() {
  return "http://localhost:5000/api/all-groups";
}

function deleteGroupApi() {
  return "http://localhost:5000/api/delete-group";
}
export function receiveStudent(student) {
  return { type: types.RECEIVE_STUDENT, student: student };
}
export function receiveGroups(groups) {
  return { type: types.RECEIVE_GROUPS, groups: groups };
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
    })
      .then(response => response.json())
      .then(() => alert("added!"))
      .then(user => fetchGroups(user));
  };
}

export function fetchGroups(user) {
  return dispatch => {
    return fetch(fetchGroupsApi(), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(groups => dispatch(receiveGroups(groups)));
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
  })
    .then(response => response.json())
    .then(user => fetchGroups(user))
    .then(() => history.push("/manage-groups"));
}

export function deleteGroup(group, user) {
  return dispatch => {
    return fetch(deleteGroupApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify({ group })
    }).then(groupType => console.log(groupType));
  };
}
