import * as React from "react";
import CharacterMovies from "./CharacterMovies";
import { Link } from "react-router-dom";

const CharacterRow = ({ character }) => {
  //unfortunately API doesn't provide id key. So i took it from "url" provided
  const id = character.url.match(/\d+/g)[0];

  return (
    <tr>
      <td>
        <Link to={`${id}`}>{character.name}</Link>
      </td>
      <td>{character.height}</td>
      <td>{character.mass}</td>
      <td>{character.films && <CharacterMovies movies={character.films} />}</td>
    </tr>
  );
};

export default CharacterRow;
