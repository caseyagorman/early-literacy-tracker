import * as types from "./actionTypes";
import history from "../../history";
function getItemApi(id) {
  return `http://localhost:5000/api/item-detail/${id}`;
}
function getItemsApi(user) {
  return "http://localhost:5000/api/items";
}
function addItemApi() {
  return "http://localhost:5000/api/add-item";
}

function deleteItemApi() {
  return "http://localhost:5000/api/delete-item";
}

export function receiveitem(item) {
  return { type: types.RECEIVE_ITEM, item: item };
}

export function fetchItem(id, user, itemType) {
  return dispatch => {
    return fetch(getItemApi(id), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(item => dispatch(receiveitem(item)));
  };
}

export function receiveItems(items) {
  return { type: types.RECEIVE_items, items: items };
}
export function fetchItems(user, itemType) {
  return dispatch => {
    return fetch(getItemsApi(user), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(items => dispatch(receiveItems(items)));
  };
}
export function deleteitem(user, item, itemType) {
  return dispatch => {
    return fetch(deleteItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      },
      body: JSON.stringify(item)
    })
      .then(() => dispatch(fetchItems(user, itemType)))
      .then(() => history.push("/items"));
  };
}

export function additem(user, item, itemType) {
  return dispatch => {
    return fetch(addItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      },
      body: JSON.stringify(item)
    })
      .then(() => dispatch(fetchItems(user, itemType)))
      .then(() => history.push("/items"));
  };
}
