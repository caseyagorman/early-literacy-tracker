import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import RegisterUser from "./containers/Users/RegisterUser";
import LoginUser from "./containers/Users/LoginUser";
import Home from "./containers/Home/Home";
import history from "./history";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import AllStudents from "./containers/Students/AllStudents";
import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
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
      <Route path="/register" component={RegisterUser} />
      <Route path="/login" component={userIsNotAuthenticated(LoginUser)} />
      <Route path="/students" component={userIsAuthenticated(AllStudents)} />
      <Route path="//" component={userIsAuthenticated(Home)} />
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
//   /* <Route
// path="/students"
// render={props => <AllStudents token={localStorage.token} {...props} />}
// /> */
// }
