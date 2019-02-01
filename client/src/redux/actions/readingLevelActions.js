import history from "../../history";
import * as types from "./actionTypes";
function assignReadingLevelApi() {
  return "http://localhost:5000/api/get-reading-levels";
}

export function receiveReadingLevels(readingLevels) {
  return { type: types.RECEIVE_READING_LEVELS, readingLevels: readingLevels };
}

export function fetchReadingLevels(user) {
  return dispatch => {
    return fetch(assignReadingLevelApi(), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(readingLevels => dispatch(receiveReadingLevels(readingLevels)));
  };
}
