import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchMovies } from "./actions/movieActions";
import Homepage from "./components/Homepage";

class App extends Component {
  componentDidMount = () => {
    this.props.fetchMovies();
  };

  render() {
    return (
      <Router>
        <div className="container pt-5 text-center">
          <Switch>
            <Route path="/:id">
              <div>test</div>
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

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
