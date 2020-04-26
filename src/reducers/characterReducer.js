import {
  SEARCH_CHARACTER_BEGIN,
  SEARCH_CHARACTER_SUCCESS,
  SEARCH_CHARACTER_FAILURE,
} from "../actions/characterActions";

const initialState = {
  character: {},
  loading: false,
  error: null,
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CHARACTER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SEARCH_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload.results,
      };

    case SEARCH_CHARACTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        results: {},
      };

    default:
      return state;
  }
}
