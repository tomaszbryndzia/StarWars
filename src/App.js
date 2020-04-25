import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { simpleAction } from "./actions/simpleAction";

// import Main from "./components/Main";
// import Character from "./components/charDetails/Character";

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
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
              <button onClick={this.simpleAction}>Test redux action</button>
              <div>cos</div>
              <pre>{JSON.stringify(this.props)}</pre>
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
