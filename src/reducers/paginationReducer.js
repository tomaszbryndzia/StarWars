import { SET_PAGINATION } from "../actions/paginationActions";

const initialState = {
  page: 1,
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGINATION:
      return {
        ...state,
        page: action.payload.page,
      };

    default:
      return state;
  }
}
