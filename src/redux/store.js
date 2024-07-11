import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { a } from "./reducers/a.js";

let reducers = combineReducers({ a });
let store = createStore(reducers, applyMiddleware(thunk));

export default store;
