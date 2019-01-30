import { combineReducers } from "redux";
import registerUser from "./registerReducer";
import auth from "./authReducers";
import students from "./studentsReducers";
import items from "./itemsReducer";
import student from "./studentReducer";
import studentItems from "./studentItemsReducer";
import item from "./itemReducer";
import studentTest from "./studentTestReducer";
import studentUnassignedItems from "./studentUnassignedItemsReducer";
// import itemUnassignedStudents from "./itemUnassignedStudentsReducer";
import testResults from "./testResultsReducers";
const rootReducer = combineReducers({
  registerUser,
  auth,
  students,
  items,
  item,
  student,
  studentItems,
  studentUnassignedItems,
  studentTest,
  testResults
});

export default rootReducer;
