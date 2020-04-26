import * as React from "react";
import { searchCharacter } from "../actions/characterActions";
import { connect } from "react-redux";
import moment from "moment";
import { isEmpty } from "lodash";
import BackButton from "./BackButton";

class CharacterDetails extends React.Component {
  componentDidMount() {
    const pathname = window.location.pathname;
    const id = pathname.substr(1);

    this.props.searchCharacter(id);
  }

  render() {
    const { character } = this.props;

    if (isEmpty(character)) {
      return null;
    }

    return (
      <>
        <BackButton />
        <div className="character-details mt-5">
          <div className="head">{character.name}</div>
          <div className="body">
            <div className="date row">
              <div className="col-md-6">
                <div>Created</div>
                <div>{moment(character.created).format("DD MMM YYYY")}</div>
              </div>
              <div className="col-md-6">
                <div>Last edited</div>
                <div>{moment(character.edited).format("DD MMM YYYY")}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { character: state.characterReducer.character };
};

const mapDispatchToProps = (dispatch) => ({
  searchCharacter: (id) => dispatch(searchCharacter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);
