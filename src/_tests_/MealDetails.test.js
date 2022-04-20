import React from 'react';
import {
  render, cleanup,
} from '@testing-library/react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore, { history } from '../store';
import MealDetails from '../components/MealDetails';

configure({ adapter: new Adapter() });

afterEach(cleanup);

const store = configureStore();

const MealWithStore = () => (
  <Provider store={store}>
    <React.StrictMode>
      <ConnectedRouter history={history}>
        <MealDetails location={{ search: 'img=imgUrl&t=title&i=ingredients&y=youtubeLink&ins=instructuctions' }} />
      </ConnectedRouter>
    </React.StrictMode>
  </Provider>
);

it('renders the Meal component', () => {
  const rendered = render(<MealWithStore />);
  const mealTitle = rendered.getByText('Instructions:');
  expect(mealTitle).toBeInTheDocument();

  const mealCategory = rendered.getByText('Ingredients: ingredients');
  expect(mealCategory).toBeInTheDocument();

  const streetArea = rendered.getByText('title');
  expect(streetArea).toBeInTheDocument();
  expect(rendered).toMatchSnapshot();
});

it('renders the Meal Details component with the link to the home [age]', () => {
  const rendered = mount(<MealWithStore />);
  const link = rendered.find('a').get(0);

  const homepage = '/';
  expect(link.props.href).toBe(homepage);
  expect(rendered).toMatchSnapshot();
});
it('renders the Meal Details component with the link to the youtube video', () => {
  const rendered = mount(<MealWithStore />);
  const link = rendered.find('a').get(1);

  const youtubeUrl = 'youtubeLink';
  expect(link.props.href).toBe(youtubeUrl);
  expect(rendered).toMatchSnapshot();
});

it('renders the Meal component with the correct buttons', () => {
  const rendered = mount(<MealWithStore />);
  const youtubeBtn = rendered.find('[data-testid="youtubeLink"]');
  expect(youtubeBtn.text()).toBe('Youtube Video');

  const backBtn = rendered.find('[data-testid="homeLink"]');
  expect(backBtn.text()).toBe('Back');
  expect(rendered).toMatchSnapshot();
});
