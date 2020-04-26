import * as React from "react";
import { connect } from "react-redux";
import uniquid from "uniqid";

class CharacterMovies extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { movies, allMovies } = this.props;

    const moviesList = movies.map((movie) => {
      const found = allMovies.find((allMovie) => allMovie.url === movie);
      return found.title;
    });

    this.setState({ movies: moviesList });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        {movies.map((movie) => (
          <div key={uniquid()}>{movie}</div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { allMovies: state.movieReducer.movies };
};

export default connect(mapStateToProps)(CharacterMovies);
