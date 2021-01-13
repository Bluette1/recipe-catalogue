import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';
import App from './components/App';
import ListByAlphabet from './layouts/ListByAlphabet';
import Details from './components/MealDetails';
import NotFound from './layouts/NotFound';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/details" component={Details} />
      <Route exact path="/search" component={App} />
      <Route exact path="/" component={ListByAlphabet} />
      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
