import { combineReducers } from "redux";
import registerUser from "./registerReducer";
import auth from "./authReducers";
import students from "./studentsReducers";
import items from "./itemsReducer";
const rootReducer = combineReducers({
  registerUser,
  auth,
  students,
  items
});

export default rootReducer;
