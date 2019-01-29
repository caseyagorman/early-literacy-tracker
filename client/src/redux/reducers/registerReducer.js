import initialState from "./initialState";
import {
  REGISTER_ERROR,
  REGISTER_USER,
  CLEAR_USER
} from "../actions/actionTypes";

export default function registerUser(
  state = initialState.registerUser,
  action
) {
  switch (action.type) {
    case REGISTER_USER:
      return Object.assign({}, state, {
        newUser: action.register,
        registerError: false,
        registerErrorMessage: ""
      });
    case REGISTER_ERROR:
      return Object.assign({}, state, {
        error: action.newUser
      });
    case CLEAR_USER:
      localStorage.clear();
      return Object.assign({}, state, {
        newUser: null,
        registerErrorMessage: "",
        registerError: false
      });
    default:
      return state;
  }
}
