const SEARCH_MOVIE_URL = "http://swapi.dev/api/films";
const SEARCH_URL = (name) => `http://swapi.dev/api/people?search=${name}`;
const SEARCH_URL_PAGINATE = (name, page) =>
  `http://swapi.dev/api/people?search=${name}&page=${page}`;

export { SEARCH_MOVIE_URL, SEARCH_URL, SEARCH_URL_PAGINATE };
