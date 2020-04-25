import {
  FETCH_CHARACTER_BEGIN,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
} from "../actions/characterActions";

const initialState = {
  character: {},
  loading: false,
  error: null,
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        character: action.payload.character,
      };

    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        character: {},
      };

    default:
      return state;
  }
}
