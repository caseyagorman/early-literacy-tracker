import { combineReducers } from "redux";
import registerUser from "./registerReducer";
import auth from "./authReducers";
import students from "./studentsReducers";
import items from "./itemsReducer";
import student from "./studentReducer";
import studentItems from "./studentItemsReducer";
import item from "./itemReducer";
import studentTest from "./studentTestReducer";
const rootReducer = combineReducers({
  registerUser,
  auth,
  students,
  items,
  item,
  student,
  // studentItems,
  studentTest
});

export default rootReducer;
