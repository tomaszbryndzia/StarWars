import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import searchReducer from "./searchReducer";
import characterReducer from "./characterReducer";
import paginationReducer from "./paginationReducer";

export default combineReducers({
  characterReducer,
  movieReducer,
  searchReducer,
  paginationReducer,
});
