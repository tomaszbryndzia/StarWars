import handleErrors from "../utils/handleErrors";
import { SEARCH_URL } from "../utils/constans";

export const SEARCH_BEGIN = "SEARCH_BEGIN";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

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
