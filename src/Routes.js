import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';
import AlphabetApp from './components/AlphabetApp';
import CategoryApp from './components/CategoryApp';
import ListByCategory from './containers/ListByCategory';
import ListByAlphabet from './layouts/ListByAlphabet';
import ListBy from './layouts/ListBy';
import Details from './components/MealDetails';
import NotFound from './layouts/NotFound';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/details" component={Details} />
      <Route exact path="/search" component={AlphabetApp} />
      <Route exact path="/filter" component={CategoryApp} />
      <Route exact path="/alphabet" component={ListByAlphabet} />
      <Route exact path="/category" component={ListByCategory} />
      <Route exact path="/" component={ListBy} />
      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
