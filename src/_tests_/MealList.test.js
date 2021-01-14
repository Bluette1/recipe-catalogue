import React from 'react';
import {
  render, screen, cleanup, fireEvent, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import axios from 'axios';
import MealsList from '../containers/MealsList';
import configureStore, { history } from '../store';

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
    const mealTitle = rendered.getByText('Mealia');
    expect(mealTitle).toBeInTheDocument();

    const mealCategory = rendered.getByText('Dessert');
    expect(mealCategory).toBeInTheDocument();

    const streetArea = rendered.getByText('British');
    expect(streetArea).toBeInTheDocument();

    const tags = rendered.getByText('Tags: dessert, British');
    expect(tags).toBeInTheDocument();
    expect(rendered).toMatchSnapshot();
  });
});

test('renders MealList component with the expected button elements', async () => {
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
    const hideButton = rendered.getByText('Hide from list');
    fireEvent.click(hideButton);
    expect(hideButton).toBeDefined();

    const detailsButton = rendered.getByText('View details');
    fireEvent.click(detailsButton);
    expect(detailsButton).toBeDefined();
    expect(screen.findAllByRole('button')).toBeDefined();

    expect(rendered).toMatchSnapshot();
  });
});

test('renders MealList component with the `hideMeal` button working correctly', async () => {
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

    const mealCategory = rendered.getByText('Dessert');

    const streetArea = rendered.getByText('British');

    const tags = rendered.getByText('Tags: dessert, British');
    const hideButton = rendered.getByText('Hide from list');
    fireEvent.click(hideButton);
    expect(hideButton).toBeDefined();
    expect(mealTitle).not.toBeInTheDocument();
    expect(mealCategory).not.toBeInTheDocument();
    expect(streetArea).not.toBeInTheDocument();
    expect(tags).not.toBeInTheDocument();

    expect(rendered).toMatchSnapshot();
  });
});
