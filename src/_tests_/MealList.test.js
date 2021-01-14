import React from 'react';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import MealsList from '../containers/MealsList';
import configureStore, { history } from '../store';
import axios from 'axios';

jest.mock('axios');

afterEach(cleanup);

const store = configureStore();

const MealsListWithStore = () => (
  <Provider store={store}>
    <React.StrictMode>
      <ConnectedRouter history={history}><MealsList /></ConnectedRouter>
    </React.StrictMode>
  </Provider>
);

test('', ()=>{});
it('renders app with MealList component', async () => {
  const meals = [{
    idMeal: '1',
    strMeal: 'Mealia',
    strCategory: 'Dessert',
    strMealThumb: 'image-url',
    strTags: 'dessert, British',
    strArea: 'British',
    strYoutube: 'Youtube url',
    strInstructions: 'How to Cook Mealia',
    strIngredient1: 'corn',
    strMeasure1: '1 cup',
  }];
  axios.get.mockResolvedValue({
    data: { meals },
  });
  const rendered = render(<MealsListWithStore />);
  await waitFor(() => {
  const mealTitle = rendered.getByText('Mealia');
  expect(mealTitle).toBeInTheDocument();

  const mealCategory = rendered.getByText('Dessert');
  expect(mealCategory).toBeInTheDocument();
  expect(rendered).toMatchSnapshot();
  })
});