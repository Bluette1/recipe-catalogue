import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import ListByAlphabet from './layouts/ListByAlphabet';
import Details from './components/MealDetails';
import NotFound from './layouts/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/details" component={Details} />
      <Route exact path="/:id" component={App} />
      <Route exact path="/" component={ListByAlphabet} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
