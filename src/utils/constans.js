const SEARCH_MOVIE_URL = "http://swapi.dev/api/films";
const SEARCH_URL = (name) => `http://swapi.dev/api/people?search=${name}`;
const SEARCH_URL_PAGINATE = (name, page) =>
  `http://swapi.dev/api/people?search=${name}&page=${page}`;
const SEARCH_URL_CHARACTER = (id) => `http://swapi.dev/api/people/${id}`;

export {
  SEARCH_MOVIE_URL,
  SEARCH_URL,
  SEARCH_URL_PAGINATE,
  SEARCH_URL_CHARACTER,
};
