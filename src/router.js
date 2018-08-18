import { Route, Router, Switch } from 'dva/router';

import CounterPage from './routes/CounterPage';
import IndexPage from './routes/IndexPage';
import ProductsPage from './routes/ProductsPage';
import React from 'react';
import UsersPage from './routes/UsersPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/demo/counter" exact component={CounterPage} />
        <Route path="/demo/users" exact component={UsersPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
