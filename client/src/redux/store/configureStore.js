import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};
const pReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  return createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));
}
