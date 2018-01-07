import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import BoardsList from './containers/BoardsList/BoardsList';
import Board from './containers/Board/Board';

class App extends Component {
  componentWillMount() {
    console.log(this.props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={BoardsList} />
        <Route exact path="/board" component={Board} />
      </Switch>
    );
  }
}

export default App;
