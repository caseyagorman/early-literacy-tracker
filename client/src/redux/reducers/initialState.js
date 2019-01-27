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
    students: null
  },
  items: {
    items: null
  },
  student: {
    student: null,
    fetchingStudent: false
  },
  item: {
    item: null
  },
  // itemUnassignedStudents: {},

  studentUnassignedItems: {
    studentItemSets: {}
  },
  studentItems: {
    studentItemSets: {}
  },
  studentTest: {
    testType: "",
    testItems: [],
    submittingTest: false
  },
  testResults: null
};
