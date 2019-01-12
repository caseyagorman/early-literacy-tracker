import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import RegisterUser from "./containers/Users/RegisterUser";
import history from "./history";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
const initialState = {};
const store = configureStore(initialState);

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route path="/register" component={RegisterUser} />
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
