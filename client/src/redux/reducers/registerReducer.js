import initialState from "./initialState";
import { REGISTER_ERROR, REGISTER_USER } from "../actions/actionTypes";

export default function registerUser(
  state = initialState.registerUser,
  action
) {
  switch (action.type) {
    case REGISTER_USER:
      return Object.assign({}, state, {
        newUser: action.register
      });
    case REGISTER_ERROR:
      return Object.assign({}, state, {
        error: action.newUser
      });
    default:
      return state;
  }
}
