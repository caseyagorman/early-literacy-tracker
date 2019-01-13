import initialState from "./initialState";
import {
  SET_USER,
  LOGIN_ERROR,
  CLEAR_ERRORS,
  LOGOUT_USER
} from "../actions/actionTypes";

export default function auth(state = initialState.auth, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        user: action.auth,
        isAuthenticated: true,
        loginError: ""
      });
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        user: {
          username: "",
          userId: ""
        },
        isAuthenticated: false,
        loginError: action.auth
      });
    case CLEAR_ERRORS:
      return Object.assign({}, state, {
        user: {
          username: "",
          userId: ""
        },
        isAuthenticated: false,
        loginError: ""
      });
    case LOGOUT_USER:
      return Object.assign({}, state, {
        user: {
          username: "",
          userId: ""
        },
        isAuthenticated: false,
        loginError: ""
      });

    default:
      return state;
  }
}
