import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import RequireAuth from "./components/hoc/Auth/RequireAuth";
// import noRequireAuth from './components/hoc/Auth/noRequireAuth';
import RegisterUser from "./containers/Users/RegisterUser";
import LoginUser from "./containers/Users/LoginUser";
import Home from "./containers/Home/Home";
import history from "./history";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
// import { SET_USER } from "./redux/actions/actionTypes";
import * as auth from "./redux/actions/authActions";
const initialState = {};
const store = configureStore(initialState);

// const user = sessionStorage;
// if (user) {
//   console.log("set user", user);
//   auth.checkUser(user);
// }

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route path="//" component={Home} />
      <Route path="/register" component={RegisterUser} />
      <Route path="/login" component={LoginUser} />
    </div>
  </Router>
);

export default AppRouter;
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
