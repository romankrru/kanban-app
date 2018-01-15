import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BoardsList from './containers/BoardsList/BoardsList';
import Board from './containers/Board/Board';
import Layout from './components/Layout/Layout';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/board/:id" component={Board} />
      <Route path="/" component={BoardsList} />
    </Switch>
  </Layout>
);

export default App;
