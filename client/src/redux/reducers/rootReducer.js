import { combineReducers } from "redux";
import registerUser from "./registerReducer";
import auth from "./authReducers";
import students from "./studentsReducers";
import items from "./itemsReducer";
import student from "./studentReducer";
const rootReducer = combineReducers({
  registerUser,
  auth,
  students,
  items,
  student
});

export default rootReducer;
