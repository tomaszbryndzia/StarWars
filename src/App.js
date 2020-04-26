import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchMovies } from "./actions/movieActions";
import Homepage from "./components/Homepage";
import CharacterDetails from "./components/CharaterDetails";

class App extends React.Component {
  componentDidMount = () => {
    this.props.fetchMovies();
  };

  render() {
    return (
      <Router>
        <div className="container pt-5 text-center">
          <Switch>
            <Route path="/:id">
              <CharacterDetails />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(null, mapDispatchToProps)(App);
