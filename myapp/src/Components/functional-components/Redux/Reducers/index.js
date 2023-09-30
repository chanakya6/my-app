import { counterReducer} from "./CounterReducer";
import { nameChangeReducer } from "./nameChangeReducer";

import {assingmentReducer} from "./AssingmentReducer"

import { combineReducers } from "redux";

 export default combineReducers({
        counterReducer,assingmentReducer,
})