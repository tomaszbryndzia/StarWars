import * as React from "react";
import { connect } from "react-redux";

import starWarsImage from "../images/Star-Wars-Logo.png";
import { searchResults, saveInput } from "../actions/searchActions";

class SearchInput extends React.Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    const input = e.target.value;
    this.setState({ input });

    this.props.saveInput(input);
    this.props.searchResults(input);
  };

  render() {
    return (
      <div className="head">
        <img className="logo" src={starWarsImage} alt="start-wars-image" />
        <div>
          <input
            className="search-input"
            placeholder="Type character name"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => ({
  searchResults: (name) => dispatch(searchResults(name)),
  saveInput: (input) => dispatch(saveInput(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
