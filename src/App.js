import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// import Main from "./components/Main";
// import Character from "./components/charDetails/Character";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/:id">
              <div>test</div>
            </Route>
            <Route path="/">
              <button>Test redux action</button>
              <div>cos</div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
