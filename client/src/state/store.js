// File containing redux reducer
import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import * as reducers from "./ducks";

// Create store and export it
const mainReducer = combineReducers(reducers);
const rootReducer = (state, action) => {
  if (action.type === "RESET_STATE") {
    state = undefined;
  }

  return mainReducer(state, action);
};

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
);
export default store;
