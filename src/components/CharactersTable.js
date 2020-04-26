import React from "react";
import uniquid from "uniqid";
import { connect } from "react-redux";
import CharacterRow from "./CharacterTable/CharacterRow";
import Pagination from "./Pagination";
import { isEmpty } from "lodash";

const CharactersTable = ({ characters }) => {
  if (isEmpty(characters)) {
    return null;
  }

  return (
    <>
      <Pagination />
      <table className="table table-striped">
        <thead key="thead">
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Movies</th>
          </tr>
        </thead>
        <tbody key="tbody">
          {characters.map((character) => (
            <CharacterRow character={character} key={uniquid()} />
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  return { characters: state.searchReducer.results };
};

export default connect(mapStateToProps)(CharactersTable);
