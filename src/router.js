import { Route, Router, Switch } from 'dva/router';

import Counter from './routes/Counter';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import React from 'react';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/demo/counter" exact component={Counter} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
