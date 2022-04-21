import React from 'react';
import {
  render, screen, cleanup, fireEvent, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import axios from 'axios';
import MealsList from '../containers/MealsListByCategory';
import configureStore, { history } from '../store';

jest.mock('axios');

afterEach(cleanup);
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

const store = configureStore();

const MealsListWithStore = () => (
  <Provider store={store}>
    <React.StrictMode>
      <ConnectedRouter history={history}><MealsList /></ConnectedRouter>
    </React.StrictMode>
  </Provider>
);
it('renders the MealList component', async () => {
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
    setTimeout(() => {
      const mealTitle = rendered.getByText('Mealia');
      expect(mealTitle).toBeInTheDocument();

      const mealCategory = rendered.getByText('Dessert');
      expect(mealCategory).toBeInTheDocument();

      const streetArea = rendered.getByText('British');
      expect(streetArea).toBeInTheDocument();

      const tags = rendered.getByText('Tags: dessert, British');
      expect(tags).toBeInTheDocument();
      expect(rendered).toMatchSnapshot();
      const detailsButton = rendered.getAllByText('View details')[0];
      fireEvent.click(detailsButton);
      expect(detailsButton).toBeDefined();

      const highlightButton = rendered.getAllByText('Highlight meal')[0];
      fireEvent.click(highlightButton);
      expect(highlightButton).toBeDefined();
      expect(screen.findAllByRole('button')).toBeDefined();

      const hideButton = rendered.getAllByText('Hide from list')[0];
      fireEvent.click(hideButton);
      expect(hideButton).toBeDefined();
    }, 1500);
  });
  jest.runAllTimers();
});
