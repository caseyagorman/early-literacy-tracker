import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";

import RegisterUser from "./containers/Users/RegisterUser";
import LoginUser from "./containers/Users/LoginUser";
import LogoutUser from "./containers/Users/LogoutUser";
import Home from "./containers/Home/Home";
import history from "./history";
import AllStudents from "./containers/Students/AllStudents";
import StudentDetail from "./containers/Students/StudentDetail";
import AddStudent from "./containers/Forms/AddStudent";
import AddItems from "./containers/Forms/AddItems";
import AllItems from "./containers/Items/AllItems";
import ItemDetail from "./containers/Items/ItemDetail";
// import AddPropsToRoute from "./HOC/AddPropsToRoute";
import AppNav from "./components/Navbar/AppNav";
import TestStudent from "./containers/TestStudent/TestStudent";
import StudentDetailCharts from "./containers/Charts/StudentDetailCharts";
import StudentCharts from "./containers/Charts/StudentCharts";
import ItemCharts from "./containers/Charts/ItemCharts";
import StudentTestResults from "./containers/TestResults/StudentTestResults";
const initialState = {};
const locationHelper = locationHelperBuilder({});
const store = configureStore(initialState);
const persistor = persistStore(store);

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: "/login",
  authenticatedSelector: state => state.auth.user !== null,
  wrapperDisplayName: "UserIsAuthenticated"
});

const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/",
  allowRedirectBack: false,
  authenticatedSelector: state => state.auth.user === null,
  wrapperDisplayName: "UserIsNotAuthenticated"
});

const AppRouter = () => (
  <Router history={history}>
    <div>
      <AppNav />
      <Route path="/register" component={RegisterUser} />
      <Route path="/logout" component={userIsAuthenticated(LogoutUser)} />
      <Route path="/login" component={userIsNotAuthenticated(LoginUser)} />
      <Route path="//" component={userIsAuthenticated(Home)} />
      <Route path="/students" component={userIsAuthenticated(AllStudents)} />
      <Route path="/add-student" component={userIsAuthenticated(AddStudent)} />
      <Route
        path="/items/:itemType"
        component={userIsAuthenticated(AllItems)}
      />
      <Route
        path="/add-items/:itemType"
        component={userIsAuthenticated(AddItems)}
      />
      <Route
        path="/details/:id"
        component={userIsAuthenticated(StudentDetail)}
      />

      <Route
        path="/item-detail/:itemType/:id"
        component={userIsAuthenticated(ItemDetail)}
      />
      <Route
        path="/test-student/:testType/:id"
        component={userIsAuthenticated(TestStudent)}
      />
      <Route
        path="/student-item-charts/:id"
        component={userIsAuthenticated(StudentDetailCharts)}
      />
      <Route
        path="/student-charts/:itemType/"
        component={userIsAuthenticated(StudentCharts)}
      />
      <Route
        path="/item-charts/:itemType/"
        component={userIsAuthenticated(ItemCharts)}
      />
      <Route
        path="/student-test-results/:itemType/:id/"
        component={userIsAuthenticated(StudentTestResults)}
      />
    </div>
  </Router>
);

export default AppRouter;
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();

// import { loadState, saveState } from "./localStorage";
// import AuthUser from "./HOC/AuthUser";
// import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
// import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
// import { loadState, saveState } from "./localStorage";

// const persistedState = loadState();
// const initialState = {};
// const store = configureStore(initialState, persistedState);

// store.subscribe(() => {
//   saveState(store.getState());
// });
// {
