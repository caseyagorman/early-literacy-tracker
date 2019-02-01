import history from "../../history";

function assignReadingLevelApi() {
  return "http://localhost:5000/api/add-custom-item";
}

export function assignReadingLevel(readingLevel, user, studentId) {
  return dispatch => {
    return fetch(assignReadingLevelApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      },
      body: JSON.stringify({ readingLevel, studentId })
    }).then(response => response.json());
  };
}
