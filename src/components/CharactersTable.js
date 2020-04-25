import React from "react";
import uniquid from "uniqid";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import CharacterRow from "./CharacterTable/CharacterRow";

const CharactersTable = ({ characters }) => {
  if (_.isEmpty(characters)) {
    return null;
  }

  return (
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
  );
};

const mapStateToProps = (state) => {
  return { characters: state.searchReducer.results };
};

export default connect(mapStateToProps)(CharactersTable);
