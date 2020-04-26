import * as React from "react";
import { searchCharacter } from "../actions/characterActions";
import { connect } from "react-redux";

class CharacterDetails extends React.Component {
  state = {
    character: {},
  };

  componentDidMount() {
    const pathname = window.location.pathname;
    const id = pathname.substr(1);

    const character = this.props.searchCharacter(id);
    console.log(character);
    this.setState({ character });
  }

  render() {
    const { character } = this.state;
    if (_.isEmpty(character)) {
      return null;
    }

    return (
      <div>
        <div>test</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => ({
  searchCharacter: (id) => dispatch(searchCharacter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);
