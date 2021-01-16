import React from 'react';
import {
  render, cleanup, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore, { history } from '../store';
import Meal from '../components/Meal';

configure({ adapter: new Adapter() });

afterEach(cleanup);

const store = configureStore();
const meal = {
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
};

const hideFromListSpy = jest.fn();
const highLightMealSpy = jest.fn();

const MealWithStore = () => (
  <Provider store={store}>
    <React.StrictMode>
      <ConnectedRouter history={history}>
        <Meal hideFromList={hideFromListSpy} highlightMeal={highLightMealSpy} meal={meal} />
      </ConnectedRouter>
    </React.StrictMode>
  </Provider>
);

it('renders the Meal component', () => {
  const rendered = render(<MealWithStore />);
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
it('renders the Meal component with the correct buttons', () => {
  const rendered = mount(<MealWithStore />);
  expect(rendered.find('button.details').text()).toBe('View details');
  expect(rendered.find('button.hide').text()).toBe('Hide from list');
  expect(rendered).toMatchSnapshot();
});
it('renders the Meal component with the correct link to the meal details page', () => {
  const rendered = mount(<MealWithStore />);
  const link = rendered.find('a').get(0);

  const detailsUrl = `/details?img=image-url&t=Mealia&c=Dessert
  &i=corn: 1 cup&st=British&y=Youtube url&ins=How to Cook Mealia`;
  expect(link.props.href).toBe(detailsUrl);
  expect(rendered).toMatchSnapshot();
});

it('renders the Meal component with the `hide meal` button working correctly', () => {
  const rendered = render(<MealWithStore />);
  const hideButton = rendered.getByText('Hide from list');
  expect(hideButton).toBeInTheDocument();
  fireEvent.click(hideButton);
  expect(hideFromListSpy).toHaveBeenCalledWith(meal.idMeal);
  expect(rendered).toMatchSnapshot();
});

it('renders the Meal component with the `highlight meal` button working correctly', () => {
  const rendered = render(<MealWithStore />);
  const highlightButton = rendered.getByText('Highlight meal');
  expect(highlightButton).toBeInTheDocument();
  fireEvent.click(highlightButton);
  expect(highLightMealSpy).toHaveBeenCalledWith(meal.idMeal);
  expect(rendered).toMatchSnapshot();
});
