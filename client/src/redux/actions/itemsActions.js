import * as types from "./actionTypes";
import history from "../../history";

function getWordsApi() {
  return "http://localhost:5000/api/words";
}
function getLettersApi() {
  return "http://localhost:5000/api/letters";
}
function getSoundsApi() {
  return "http://localhost:5000/api/sounds";
}
function addItemApi() {
  return "http://localhost:5000/api/add-item";
}

function deleteItemApi() {
  return "http://localhost:5000/api/delete-item";
}

export function receiveItem(item) {
  return { type: types.RECEIVE_ITEM, item: item };
}

export function receiveItems(items) {
  console.log("items", items);
  return { type: types.RECEIVE_ITEMS, items: items };
}

export function setItemType(itemType) {
  console.log("items", itemType);
  return { type: types.SET_ITEM_TYPE, items: itemType };
}

export function fetchWords(user) {
  return dispatch => {
    return fetch(getWordsApi(), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(words => dispatch(receiveItems(words)));
  };
}
export function fetchLetters(user) {
  return dispatch => {
    return fetch(getLettersApi(user), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(letters => dispatch(receiveItems(letters)));
  };
}
export function fetchSounds(user) {
  console.log("fetching sounds", user);
  return dispatch => {
    return fetch(getSoundsApi(user), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(sounds => console.log("sounds", sounds))
      .then(items => dispatch(receiveItems(items)));
  };
}

export function addWord(item, user, itemType) {
  return dispatch => {
    return fetch(addItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      },
      body: JSON.stringify({ item, itemType })
    })
      .then(() => dispatch(fetchWords(user)))
      .then(() => history.push("/words"));
  };
}
export function addLetter(item, user, itemType) {
  return dispatch => {
    return fetch(addItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      },
      body: JSON.stringify(item, itemType)
    })
      .then(() => dispatch(fetchLetters(user)))
      .then(() => history.push("/letters"));
  };
}
export function addSound(item, user, itemType) {
  return dispatch => {
    return fetch(addItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      },
      body: JSON.stringify({ item, itemType })
    })
      .then(() => dispatch(fetchSounds(user, itemType)))
      .then(() => history.push("/sounds"));
  };
}

export function deleteWord(user, item, itemType) {
  return dispatch => {
    return fetch(deleteItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify(item, itemType)
    })
      .then(() => dispatch(fetchWords(user)))
      .then(() => history.push("/words"));
  };
}
export function deleteLetter(user, item, itemType) {
  return dispatch => {
    return fetch(deleteItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify(item, itemType)
    })
      .then(() => dispatch(fetchLetters(user)))
      .then(() => history.push("/letters"));
  };
}
export function deleteSound(user, item, itemType) {
  return dispatch => {
    return fetch(deleteItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify(item, itemType)
    })
      .then(() => dispatch(fetchSounds(user)))
      .then(() => history.push("/sounds"));
  };
}