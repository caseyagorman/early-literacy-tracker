import { combineReducers } from "redux";
import registerUser from "./registerReducer";
import auth from "./authReducers";
import students from "./studentsReducers";
const rootReducer = combineReducers({
  registerUser,
  auth,
  students
});

export default rootReducer;
