import { legacy_createStore } from "redux";
//import{counterReducer} from "./Reducers/CounterReducer";
//import {counterReducer} from "./Reducers/CounterReducer";
//import { nameChangeReducer } from "./Reducers/nameChangeReducer";
import reducers from "./Reducers"
const store = legacy_createStore(reducers);
export default store;