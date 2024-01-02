import { legacy_createStore } from "redux";
import counterReducer from "../components/ReduxCounter/Services/Reducer/Reducer";

const store = legacy_createStore(counterReducer)
export default store