export default {
  registerUser: { newUser: "", registerErrorMessage: "", registerError: false },
  auth: {
    user: null,
    isAuthenticated: false,
    loginErrorMessage: "",
    loginError: false
  },
  students: {
    students: [],
    fetchingStudents: false
  }
};
