import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';

const history = createBrowserHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
