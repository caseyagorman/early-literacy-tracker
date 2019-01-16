import { combineReducers } from "redux";
import registerUser from "./registerReducer";
import auth from "./authReducers";
import students from "./studentsReducers";
import items from "./itemsReducer";
import student from "./studentReducer";
import studentItems from "./studentItemsReducer";
import student from "./studentReducer";
import item from "./itemReducer";
const rootReducer = combineReducers({
  registerUser,
  auth,
  students,
  items,
  student,
  studentItems
});

export default rootReducer;
