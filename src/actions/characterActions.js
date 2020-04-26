import handleErrors from "../utils/handleErrors";
import { SEARCH_URL_CHARACTER } from "../utils/constans";

export const SEARCH_CHARACTER_BEGIN = "SEARCH_CHARACTER_BEGIN";
export const SEARCH_CHARACTER_SUCCESS = "SEARCH_CHARACTER_SUCCESS";
export const SEARCH_CHARACTER_FAILURE = "SEARCH_CHARACTER_FAILURE";

export const searchCharacterBegin = () => ({
  type: SEARCH_CHARACTER_BEGIN,
});

export const searchCharacterSuccess = (data) => ({
  type: SEARCH_CHARACTER_SUCCESS,
  payload: { data },
});

export const searchCharacterFailure = (error) => ({
  type: SEARCH_CHARACTER_FAILURE,
  payload: { error },
});

export function searchCharacter(id) {
  return (dispatch) => {
    dispatch(searchCharacterBegin());
    return fetch(SEARCH_URL_CHARACTER(id))
      .then(handleErrors)
      .then((results) => results.json())
      .then((data) => {
        dispatch(searchCharacterSuccess(data));
        return data;
      })
      .catch((error) => dispatch(searchCharacterFailure(error)));
  };
}
