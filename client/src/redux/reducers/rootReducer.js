import { combineReducers } from "redux";
import registerUser from "./registerReducer";
import auth from "./authReducers";
const rootReducer = combineReducers({
  registerUser,
  auth
});

export default rootReducer;
