import thunk from "redux-thunk";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import { coordinateView } from "./coordinateView/coordinateView";
import { adressElection } from "./addres-election/adressElection";
import { changeState } from "./changeState/changeState";

const rootReducer = combineReducers({
  ccView: coordinateView,
  userView: adressElection,
  changeState: changeState,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
