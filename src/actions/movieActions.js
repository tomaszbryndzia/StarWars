import { SEARCH_MOVIE_URL } from "../utils/constans";
import handleErrors from "../utils/handleErrors";

export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN,
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies },
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error },
});

export function fetchMovies() {
  return (dispatch) => {
    dispatch(fetchMoviesBegin());
    return fetch(SEARCH_MOVIE_URL)
      .then(handleErrors)
      .then((results) => results.json())
      .then((data) => {
        dispatch(fetchMoviesSuccess(data.results));
        return data.results;
      })
      .catch((error) => dispatch(fetchMoviesFailure(error)));
  };
}
