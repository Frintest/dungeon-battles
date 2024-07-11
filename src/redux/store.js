import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { TeamReducer } from "./reducers/team.js";

let reducers = combineReducers({ TeamReducer });
let store = createStore(reducers, applyMiddleware(thunk));

export default store;
