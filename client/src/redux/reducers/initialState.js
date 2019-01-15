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
  }
};
