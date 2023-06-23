import { legacy_createStore } from "redux";
import { counterReducer } from "./Reducess/counterReducer";


const store = legacy_createStore(counterReducer);
export default store;