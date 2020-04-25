import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import characterReducer from "./characterReducer";

export default combineReducers({
  movieReducer,
  characterReducer,
});
