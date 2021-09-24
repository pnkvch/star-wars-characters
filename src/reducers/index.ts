import { combineReducers } from "redux";
import { characterReducer } from "./character";
import { moviesReducer } from "./movies";

export default combineReducers({
  characterReducer,
  moviesReducer,
});
