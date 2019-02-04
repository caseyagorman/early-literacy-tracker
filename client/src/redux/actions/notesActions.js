import * as types from "./actionTypes";
import history from "../../history";

function addNoteApi() {
  return "http://localhost:5000/api/add-note";
}

function fetchNotesApi() {
  return "http://localhost:5000/api/all-notes";
}

function deleteNoteApi() {
  return "http://localhost:5000/api/delete-note";
}

export function receiveNotes(notes) {
  return { type: types.RECEIVE_NOTES, notes: notes };
}

export function fetchNotes(user) {
  return dispatch => {
    return fetch(fetchNotesApi(), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(notes => dispatch(receiveNotes(notes)));
  };
}

export function addNote(note, user) {
  return dispatch => {
    return (
      fetch(addNoteApi(), {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": user
        },
        body: JSON.stringify(note)
      })
        // .then(response => response.json())
        .then(() => dispatch(fetchNotes(user)))
    );
  };
}

export function deleteNote(note, user) {
  return dispatch => {
    return (
      fetch(deleteNoteApi(), {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": user
        },
        body: JSON.stringify(note)
      })
        // .then(response => response.json())
        .then(() => dispatch(fetchNotes(user)))
    );
  };
}
