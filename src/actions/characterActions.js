import handleErrors from "../utils/handleErrors";
import { SEARCH_CHARACTER_URL } from "../utils/constans";

export const FETCH_CHARACTER_BEGIN = "FETCH_CHARACTER_BEGIN";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";

export const fetchCharacterBegin = () => ({
  type: FETCH_CHARACTER_BEGIN,
});

export const fetchCharacterSuccess = (movies) => ({
  type: FETCH_CHARACTER_SUCCESS,
  payload: { movies },
});

export const fetchCharacterFailure = (error) => ({
  type: FETCH_CHARACTER_FAILURE,
  payload: { error },
});

export function fetchCharacter(name) {
  return (dispatch) => {
    dispatch(fetchCharacterBegin());
    return fetch(SEARCH_CHARACTER_URL(name))
      .then(handleErrors)
      .then((results) => results.json())
      .then((data) => {
        dispatch(fetchCharacterSuccess(data.results));
        console.log(data);
        return data.results;
      })
      .catch((error) => dispatch(fetchCharacterFailure(error)));
  };
}
