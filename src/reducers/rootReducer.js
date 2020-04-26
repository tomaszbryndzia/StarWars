import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import searchReducer from "./searchReducer";
import characterReducer from "./characterReducer";

export default combineReducers({
  movieReducer,
  searchReducer,
});
