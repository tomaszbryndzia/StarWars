import {
  SEARCH_BEGIN,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SAVE_INPUT,
} from "../actions/searchActions";

const initialState = {
  input: "",
  results: {},
  count: 0,
  loading: false,
  error: null,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload.results,
        count: action.payload.count,
      };

    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        results: {},
      };

    case SAVE_INPUT:
      return {
        ...state,
        input: action.payload.input,
      };

    default:
      return state;
  }
}
