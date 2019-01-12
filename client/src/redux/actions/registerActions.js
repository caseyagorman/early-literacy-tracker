import * as types from "./actionTypes";

export function checkNewUser(register) {
  if (!register.error) {
    return { type: types.REGISTER_USER, register: register };
  } else if (register.error) {
    return { type: types.REGISTER_USER, register: register };
  }
}

export function registerUser(newUser) {
  return fetch("http://localhost:5000/api/register", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  })
    .then(response => response.json())
    .then(newUser => checkNewUser(newUser))
    .catch(err => console.error(err));
}
