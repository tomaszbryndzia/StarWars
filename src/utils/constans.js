const SEARCH_MOVIE_URL = "http://swapi.dev/api/films";
const SEARCH_CHARACTER_URL = (name) =>
  `http://swapi.dev/api/people?search=${name}`;

export { SEARCH_MOVIE_URL, SEARCH_CHARACTER_URL };
