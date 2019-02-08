import * as types from "./actionTypes";
function registerUserApi() {
  return "http://54.68.30.124/api/register";
}

export function clearUser(register) {
  return { type: types.CLEAR_USER, register: register };
}
export function checkNewUser(register) {
  if (!register.error) {
    return { type: types.REGISTER_USER, register: register };
  } else if (register.error) {
    return { type: types.REGISTER_USER, register: register };
  }
}

export function registerUser(newUser) {
  return dispatch => {
    return fetch(registerUserApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
      .then(newUser => dispatch(checkNewUser(newUser)))
      .catch(err => console.error(err));
  };
}
