import { counterReducer } from "./counterReducer";
import { nameChangeReducer } from "./nameChangeReducer";
import { todoReducer } from "./todoReducer";

import { combineReducers } from "redux";

export default combineReducers({
  counterReducer,
  nameChangeReducer,
  todoReducer,
});
