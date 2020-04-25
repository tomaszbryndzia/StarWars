import handleErrors from "../utils/handleErrors";
import { SEARCH_URL, SEARCH_URL_PAGINATE } from "../utils/constans";

export const SEARCH_BEGIN = "SEARCH_BEGIN";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const SAVE_INPUT = "SAVE_INPUT";

export const searchSave = (input) => ({
  type: SAVE_INPUT,
  payload: { input },
});

export const searchBegin = () => ({
  type: SEARCH_BEGIN,
});

export const searchSuccess = (data) => ({
  type: SEARCH_SUCCESS,
  payload: { count: data.count, results: data.results },
});

export const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  payload: { error },
});

export function searchResults(name) {
  return (dispatch) => {
    dispatch(searchBegin());
    return fetch(SEARCH_URL(name))
      .then(handleErrors)
      .then((results) => results.json())
      .then((data) => {
        dispatch(searchSuccess(data));
        return data;
      })
      .catch((error) => dispatch(searchFailure(error)));
  };
}

export function searchPaginateResults(name, page) {
  return (dispatch) => {
    dispatch(searchBegin());
    return fetch(SEARCH_URL_PAGINATE(name, page))
      .then(handleErrors)
      .then((results) => results.json())
      .then((data) => {
        dispatch(searchSuccess(data));
        return data;
      })
      .catch((error) => dispatch(searchFailure(error)));
  };
}

export function saveInput(input) {
  return (dispatch) => {
    dispatch(searchSave(input));
    return input;
  };
}
