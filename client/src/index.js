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
import AddPropsToRoute from "./HOC/AddPropsToRoute";
import AppNav from "./components/Navbar/AppNav";
import TestStudent from "./containers/TestStudent/TestStudent";
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
        path="/letters"
        component={userIsAuthenticated(
          AddPropsToRoute(AllItems, {
            itemType: "letters"
          })
        )}
      />
      <Route
        path="/sounds"
        component={userIsAuthenticated(
          AddPropsToRoute(AllItems, {
            itemType: "sounds"
          })
        )}
      />
      <Route
        path="/add-words"
        component={userIsAuthenticated(
          AddPropsToRoute(AddItems, {
            itemType: "words"
          })
        )}
      />
      <Route
        path="/add-letters"
        component={userIsAuthenticated(
          AddPropsToRoute(AddItems, {
            itemType: "letters"
          })
        )}
      />
      <Route
        path="/add-sounds"
        component={userIsAuthenticated(
          AddPropsToRoute(AddItems, {
            itemType: "sounds"
          })
        )}
      />
      <Route
        path="/words"
        component={userIsAuthenticated(
          AddPropsToRoute(AllItems, {
            itemType: "words"
          })
        )}
      />
      <Route
        path="/details/:id"
        component={userIsAuthenticated(StudentDetail)}
      />
      <Route
        path="/word-detail/:id"
        component={userIsAuthenticated(
          AddPropsToRoute(ItemDetail, {
            itemType: "words"
          })
        )}
      />
      <Route
        path="/letter-detail/:id"
        component={userIsAuthenticated(
          AddPropsToRoute(ItemDetail, {
            itemType: "letters"
          })
        )}
      />
      <Route
        path="/sound-detail/:id"
        component={userIsAuthenticated(
          AddPropsToRoute(ItemDetail, {
            itemType: "sounds"
          })
        )}
      />
      <Route
        path="/test-student/:id"
        component={userIsAuthenticated(TestStudent)}
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
