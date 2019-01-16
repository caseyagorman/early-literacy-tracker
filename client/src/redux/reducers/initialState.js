export default {
  registerUser: {
    newUser: null,
    registerErrorMessage: "",
    registerError: false
  },
  auth: {
    user: null,
    isAuthenticated: false,
    loginErrorMessage: "",
    loginError: false
  },
  students: {
    students: [],
    fetchingStudents: false
  },
  items: {
    items: [],
    itemType: "",
    fetchingItems: false
  },
  student: {
    student: null,
    fetchingStudent: false
  },
  item: {
    item: "",
    itemType: "",
    fetchingItem: false
  },
  studentItems: {
    items: [],
    itemType: "",
    fetchingItems: false
  }
};
