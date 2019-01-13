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
const initialState = {};
const store = configureStore(initialState);
export const persistor = persistStore(store);
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route path="/register" component={RegisterUser} />
      <Route path="/login" component={LoginUser} />
      <Route path="/students" component={AllStudents} />
      <Route path="//" component={Home} />
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
