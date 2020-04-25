import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchMovies } from "./actions/movieActions";

// import Main from "./components/Main";
// import Character from "./components/charDetails/Character";

class App extends Component {
  fetchMovies = () => {
    this.props.fetchMovies();
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/:id">
              <div>test</div>
            </Route>
            <Route path="/">
              <button onClick={this.fetchMovies}>Test redux action</button>
              <div>cos</div>
              <pre>{JSON.stringify(this.props)}</pre>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return { ...state };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
