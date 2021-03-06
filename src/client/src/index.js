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
import RequestResetPassword from "./containers/Users/RequestResetPassword";
import LogoutUser from "./containers/Users/LogoutUser";
import history from "./history";
import AllStudents from "./containers/Students/AllStudents";
import StudentDetail from "./containers/Students/StudentDetail";
import AddStudent from "./containers/Forms/AddStudent";
import AddItems from "./containers/Forms/AddItems";
import AllItems from "./containers/Items/AllItems";
import ItemDetail from "./containers/Items/ItemDetail";
import AppNav from "./containers/Navbar/AppNav";
import TestStudent from "./containers/TestStudent/TestStudent";
import StudentDetailCharts from "./containers/Charts/StudentDetailCharts";
import StudentCharts from "./containers/Charts/StudentCharts";
import ItemCharts from "./containers/Charts/ItemCharts";
import ReadingCharts from "./containers/Charts/ReadingCharts";
import StudentTestResults from "./containers/TestResults/StudentTestResults";
import AssignItems from "./containers/Items/AssignItems";
import AssignReadingLevel from "./containers/ReadingLevel/AssignReadingLevel";
import ResetPassword from "./containers/Users/ResetPassword";
import ToastTest from "./containers/Toast/ToastTest";
import AssignGroup from "./containers/Groups/AssignGroup";
import AddGroup from "./containers/Forms/AddGroup";
import GroupDetail from "./containers/Groups/GroupDetail";
import Home from "./components/Users/Home";
const initialState = {};
const locationHelper = locationHelperBuilder({});
const store = configureStore(initialState);
const persistor = persistStore(store);

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: "/",
  authenticatedSelector: state => state.auth.user !== null,
  wrapperDisplayName: "UserIsAuthenticated"
});

const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/students",
  allowRedirectBack: false,
  authenticatedSelector: state => state.auth.user === null,
  wrapperDisplayName: "UserIsNotAuthenticated"
});

const AppRouter = () => (
  <Router history={history}>
    <div>
      <AppNav />
      <Route path="//" component={userIsNotAuthenticated(Home)} />
      <Route
        path="/register"
        component={userIsNotAuthenticated(RegisterUser)}
      />
      <Route path="/logout" component={userIsAuthenticated(LogoutUser)} />
      <Route path="/login" component={userIsNotAuthenticated(LoginUser)} />
      <Route path="//" component={userIsAuthenticated(AllStudents)} />
      <Route path="/forgot-password" component={RequestResetPassword} />
      <Route path="/reset-password/:resetToken" component={ResetPassword} />
      <Route path="/students" component={userIsAuthenticated(AllStudents)} />
      <Route path="/add-student" component={userIsAuthenticated(AddStudent)} />
      <Route
        path="/items/:itemType"
        component={userIsAuthenticated(AllItems)}
      />
      <Route
        path="/details/:id"
        component={userIsAuthenticated(StudentDetail)}
      />
      <Route path="/toast/" component={userIsAuthenticated(ToastTest)} />

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
        path="/reading-level-charts/"
        component={userIsAuthenticated(ReadingCharts)}
      />
      <Route
        path="/add-items/:itemType/"
        component={userIsAuthenticated(AssignItems)}
      />
      <Route
        path="/student-test-results/:itemType/:id/"
        component={userIsAuthenticated(StudentTestResults)}
      />
      <Route
        path="/add-custom-items/:id/:itemType/"
        component={userIsAuthenticated(AddItems)}
      />
      <Route
        path="/assign-reading-level/:id/"
        component={userIsAuthenticated(AssignReadingLevel)}
      />
      <Route
        path="/manage-groups/"
        component={userIsAuthenticated(AssignGroup)}
      />
      <Route path="/create-group/" component={userIsAuthenticated(AddGroup)} />
      <Route
        path="/group-detail/:group/"
        render={props => (
          <GroupDetail key={props.match.params.group} {...props} />
        )}
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
