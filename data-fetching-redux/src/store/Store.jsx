import { applyMiddleware, legacy_createStore } from "redux";
import todosReducer from "../components/services/reducers/TodosReducer";
import { thunk } from "redux-thunk";

const store = legacy_createStore(todosReducer, applyMiddleware(thunk))
export default store;
